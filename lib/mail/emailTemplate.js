import { SITE_NAME, SITE_URL } from "../constants";
import { renderDefaultFooter } from "./emailFooter";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const renderRows = (fields = []) =>
  fields
    .filter(({ value }) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:12px 0;color:#5b667a;font-size:14px;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:12px 0;color:#12213f;font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

const renderFooter = (footer) => {
  
  if (!footer) {
    return renderDefaultFooter({
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL || SITE_URL,
      supportEmail: process.env.MAIL_REPLY_TO || process.env.MAIL_TO,
      whatsapp: process.env.MAIL_WHATSAPP || "",
    });
  }

  if (typeof footer === "string") {
    return `<p style="margin:24px 0 0;color:#6a758a;font-size:13px;line-height:1.6;">${escapeHtml(footer)}</p>`;
  }

  return renderDefaultFooter(footer);
};

export function renderSiteEmail({
  title,
  intro,
  fields,
  message,
  footer,
}) {
  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7fb;padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dfe7f2;">
                <tr>
                  <td style="background:#071a3c;color:#ffffff;padding:26px 30px;">
                    <div style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9fc7ff;">${SITE_NAME}</div>
                    <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 30px;">
                    <p style="margin:0 0 20px;color:#33415f;font-size:15px;line-height:1.7;">${escapeHtml(intro)}</p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e8eef6;border-bottom:1px solid #e8eef6;">
                      ${renderRows(fields)}
                    </table>
                    ${message
      ? `<div style="margin-top:22px;padding:18px;background:#f7faff;border-left:4px solid #1769e0;color:#12213f;font-size:15px;line-height:1.7;">${escapeHtml(message).replace(/\n/g, "<br>")}</div>`
      : ""
    }
                    ${renderFooter(footer)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
