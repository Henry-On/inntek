
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export function renderDefaultFooter({ siteUrl, supportEmail, whatsapp }) {
  const whatsappLink = whatsapp ? `https://wa.me/${String(whatsapp).replace(/\D/g, "")}` : "";

  return `
    <div style="margin-top:24px; padding-top:18px; border-top:3px solid #e8eef6;color:#6a758a;font-size:13px;line-height:1.6;">
      <table style="text-align:center" role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
          <td>
              <p style="margin:0;">Please keep an eye on your inbox. We will get back to you shortly.
              <br>You can also reach us through the channels below.
              </p>
          </td>
          </tr>
          <tr>
          <td>
              <div style="text-align:center;">
              <span style="white-space:nowrap;">
                  Website: <a style="color:#12213f;font-weight:600; text-decoration:none;" href="${escapeHtml(siteUrl)}">${escapeHtml(siteUrl)}</a>
              </span>
              <span style="white-space:nowrap;">
                  Email: <a style="color:#12213f;font-weight:600; text-decoration:none;" href="mailto:${escapeHtml(supportEmail)}">${escapeHtml(supportEmail)}</a>
              </span>
              ${
                whatsapp
                  ? `<span style="white-space:nowrap;">
                      WhatsApp: <a style="color:#12213f;font-weight:600; text-decoration:none;" href="${escapeHtml(whatsappLink)}" target="_blank">${escapeHtml(whatsapp)}</a>
                    </span>`
                  : ""
              }
              </div>
          </td>
          </tr>
      </table>
    </div>
  `;
}
