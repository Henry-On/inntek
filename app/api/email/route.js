import { NextResponse } from "next/server";
import { sendSiteEmail } from "@/lib/mail/sendSiteEmail";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  try {
    const body = await request.json();

    const formType = clean(body.formType) || "contact";
    const name = clean(body.name);
    const email = clean(body.email);
    const subject = clean(body.subject);
    const message = clean(body.message);
    const fields = Array.isArray(body.fields) ? body.fields : [];

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!["newsletter", "referralNotify"].includes(formType) && (!name || !message)) {
      return NextResponse.json({ error: "Please fill in your name and message." }, { status: 400 });
    }

    await sendSiteEmail({ formType, name, email, subject, message, fields });

    return NextResponse.json({
      message: "Your message has been received. We will contact you as soon as possible.",
    });
  } catch (error) {
    console.error("Email route error:", error);

    return NextResponse.json(
      { error: "We could not send your message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
