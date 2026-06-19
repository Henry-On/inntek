import nodemailer from "nodemailer";
import { renderSiteEmail } from "./emailTemplate";
import { SITE_URL } from "../constants";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "MAIL_FROM",
  "MAIL_TO",
];

function getTransporter() {
  const missing = requiredEnv.filter((key) => !process.env[key]);

  if (missing.length) {
    throw new Error(`Missing email environment variables: ${missing.join(", ")}`);
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

const formTitles = {
  contact: "New contact form message",
  homeContact: "New website enquiry",
  newsletter: "New newsletter subscription",
  referralNotify: "New referral program notification request",
};

export async function sendSiteEmail({ formType, name, email, subject, message, fields = [] }) {
  const transporter = getTransporter();
  const title = formTitles[formType] || "New website form submission";
  const replyTo = email || process.env.MAIL_REPLY_TO || process.env.MAIL_FROM;
  const displayName = name || "Website visitor";

  const normalizedFields = [
    { label: "Form", value: title },
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Subject", value: subject },
    ...fields,
  ];

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo,
    subject: `[Inntek] ${subject || title}`,
    html: renderSiteEmail({
      title,
      intro: `${displayName} submitted a form on the Inntek website.`,
      fields: normalizedFields,
      message,
      footer: "Reply directly to this email to contact the sender.",
    }),
  });

  if (email) {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      replyTo: process.env.MAIL_REPLY_TO || process.env.MAIL_TO,
      subject: "We received your message",
      html: renderSiteEmail({
        title: "We received your message",
        intro: `Hi ${displayName}, thank you for contacting Inntek. Your message has been received and our team will contact you as soon as possible.`,
        fields: normalizedFields.filter(({ label }) => label !== "Email"),
        message,
        footer: {
          siteUrl: process.env.NEXT_PUBLIC_SITE_URL || SITE_URL,
          supportEmail: process.env.MAIL_REPLY_TO || process.env.MAIL_TO,
          whatsapp: process.env.MAIL_WHATSAPP || "",
        },
      }),
    });
  }
}
