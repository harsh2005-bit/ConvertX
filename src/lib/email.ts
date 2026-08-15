import nodemailer from "nodemailer";
import { Resend } from "resend";

export interface ContactLeadData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  businessType: string;
  monthlyBudget: string;
  servicesNeeded: string[];
  message?: string;
  submittedAt?: string;
}

export interface EmailSendResult {
  success: boolean;
  provider: "resend" | "smtp" | "webhook" | "console";
  messageId?: string;
  error?: string;
}

/**
 * Generate a responsive, modern HTML email template for ConvertX lead notification
 */
export function generateLeadEmailHtml(lead: ContactLeadData): string {
  const sanitizedPhone = lead.phone.replace(/[^0-9+]/g, "");
  const whatsappUrl = `https://wa.me/${sanitizedPhone.replace("+", "")}`;
  const mailtoUrl = `mailto:${lead.email}?subject=${encodeURIComponent("ConvertX Growth Strategy Discussion")}`;
  const callUrl = `tel:${sanitizedPhone}`;

  const servicesBadges = lead.servicesNeeded && lead.servicesNeeded.length > 0
    ? lead.servicesNeeded
        .map(
          (service) =>
            `<span style="display:inline-block; background-color:#1E2029; color:#FF5500; font-weight:600; font-size:12px; padding:4px 10px; border-radius:6px; margin-right:6px; margin-bottom:6px; border:1px solid rgba(255,85,0,0.3);">${service}</span>`
        )
        .join(" ")
    : '<span style="color:#94A3B8; font-size:13px;">None selected</span>';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New ConvertX Lead</title>
</head>
<body style="margin:0; padding:0; background-color:#060608; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#060608; padding:32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" style="max-width:620px; background-color:#0D0E12; border:1px solid rgba(255,255,255,0.12); border-radius:16px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.8);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #14161F 0%, #0D0E12 100%); padding:28px 32px; border-bottom:1px solid rgba(255,85,0,0.3);">
              <table role="presentation" width="100%">
                <tr>
                  <td>
                    <span style="font-size:22px; font-weight:900; letter-spacing:-0.5px; color:#FFFFFF;">
                      CONVERT<span style="color:#FF5500;">X</span>
                    </span>
                    <div style="display:inline-block; margin-left:12px; background:rgba(255,85,0,0.15); color:#FF5500; font-size:11px; font-weight:700; padding:3px 8px; border-radius:4px; border:1px solid rgba(255,85,0,0.3); text-transform:uppercase; letter-spacing:0.5px;">
                      ⚡ New Lead
                    </div>
                  </td>
                  <td align="right" style="color:#94A3B8; font-size:12px;">
                    ${new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })} IST
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding:24px 32px 16px 32px; background-color:#111319; border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 12px 0; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#FF5500;">
                Quick Connect with Client:
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding-right:8px; padding-bottom:8px;">
                    <a href="${whatsappUrl}" target="_blank" style="display:inline-block; background-color:#25D366; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:700; padding:10px 16px; border-radius:8px;">
                      💬 Open WhatsApp
                    </a>
                  </td>
                  <td style="padding-right:8px; padding-bottom:8px;">
                    <a href="${callUrl}" style="display:inline-block; background-color:#FF5500; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:700; padding:10px 16px; border-radius:8px;">
                      📞 Call Phone
                    </a>
                  </td>
                  <td style="padding-bottom:8px;">
                    <a href="${mailtoUrl}" style="display:inline-block; background-color:#1E2029; color:#FFFFFF; text-decoration:none; font-size:13px; font-weight:700; padding:10px 16px; border-radius:8px; border:1px solid rgba(255,255,255,0.15);">
                      ✉️ Send Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding:28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                
                <!-- Client Name -->
                <tr>
                  <td width="35%" style="padding:10px 0; color:#94A3B8; font-size:13px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    Client Name
                  </td>
                  <td style="padding:10px 0; color:#FFFFFF; font-size:15px; font-weight:700; border-bottom:1px solid rgba(255,255,255,0.06);">
                    ${lead.name}
                  </td>
                </tr>

                <!-- Company -->
                <tr>
                  <td style="padding:10px 0; color:#94A3B8; font-size:13px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    Company / Brand
                  </td>
                  <td style="padding:10px 0; color:#FFFFFF; font-size:14px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    ${lead.company || "Not specified"}
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:10px 0; color:#94A3B8; font-size:13px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    Work Email
                  </td>
                  <td style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.06);">
                    <a href="${mailtoUrl}" style="color:#FF5500; font-size:14px; font-weight:600; text-decoration:none;">
                      ${lead.email}
                    </a>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding:10px 0; color:#94A3B8; font-size:13px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    Phone Number
                  </td>
                  <td style="padding:10px 0; color:#FFFFFF; font-size:14px; font-weight:700; border-bottom:1px solid rgba(255,255,255,0.06);">
                    <a href="${callUrl}" style="color:#FFFFFF; text-decoration:none;">${lead.phone}</a>
                  </td>
                </tr>

                <!-- Industry -->
                <tr>
                  <td style="padding:10px 0; color:#94A3B8; font-size:13px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    Industry / Vertical
                  </td>
                  <td style="padding:10px 0; color:#FFFFFF; font-size:14px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    ${lead.businessType}
                  </td>
                </tr>

                <!-- Monthly Budget -->
                <tr>
                  <td style="padding:10px 0; color:#94A3B8; font-size:13px; font-weight:600; border-bottom:1px solid rgba(255,255,255,0.06);">
                    Monthly Ad Budget
                  </td>
                  <td style="padding:10px 0; color:#10B981; font-size:14px; font-weight:700; border-bottom:1px solid rgba(255,255,255,0.06);">
                    ${lead.monthlyBudget}
                  </td>
                </tr>

                <!-- Services Requested -->
                <tr>
                  <td style="padding:12px 0; color:#94A3B8; font-size:13px; font-weight:600; vertical-align:top; border-bottom:1px solid rgba(255,255,255,0.06);">
                    Services Requested
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.06);">
                    ${servicesBadges}
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:12px 0; color:#94A3B8; font-size:13px; font-weight:600; vertical-align:top;">
                    Client Message
                  </td>
                  <td style="padding:12px 0; color:#CBD5E1; font-size:13px; line-height:1.6; white-space:pre-wrap; background:rgba(255,255,255,0.02); border-radius:8px; padding:12px;">
                    ${lead.message && lead.message.trim() ? lead.message : "No additional message provided."}
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px; background-color:#060608; border-top:1px solid rgba(255,255,255,0.08); text-align:center; color:#64748B; font-size:11px;">
              ConvertX Performance Engine &bull; Automated Lead Notification &bull; 
              <a href="https://convertx.media" style="color:#FF5500; text-decoration:none;">convertx.media</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Dispatch lead email using the best available configured method:
 * 1. Resend API (if RESEND_API_KEY is configured)
 * 2. SMTP / Gmail App Password (if SMTP_USER and SMTP_PASS are configured)
 * 3. Webhook URL (if LEAD_WEBHOOK_URL is configured)
 */
export async function sendLeadNotificationEmail(
  lead: ContactLeadData
): Promise<EmailSendResult> {
  const recipientEmail =
    process.env.NOTIFICATION_EMAIL ||
    process.env.SMTP_TO_EMAIL ||
    "harshjhabksc@gmail.com";

  const subject = `🚀 [New Lead] ${lead.name}${lead.company ? ` (${lead.company})` : ""} - ${lead.businessType}`;
  const htmlContent = generateLeadEmailHtml(lead);

  // 1. Try Resend if configured
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "ConvertX Leads <onboarding@resend.dev>";

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [recipientEmail],
        replyTo: lead.email,
        subject,
        html: htmlContent,
      });

      if (error) {
        console.error("Resend API error:", error.message);
      } else if (data?.id) {
        console.log(`[EMAIL DISPATCHED via Resend] ID: ${data.id} -> ${recipientEmail}`);
        return { success: true, provider: "resend", messageId: data.id };
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error("Resend sending failed:", errorMessage);
    }
  }

  // 2. Try SMTP / Gmail (Nodemailer) if configured
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  if (smtpUser && smtpPass) {
    try {
      const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
      const smtpPort = Number(process.env.SMTP_PORT) || 465;
      const isSecure = smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: isSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"ConvertX Leads" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: lead.email,
        subject,
        html: htmlContent,
      });

      console.log(`[EMAIL DISPATCHED via SMTP] ID: ${info.messageId} -> ${recipientEmail}`);
      return { success: true, provider: "smtp", messageId: info.messageId };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error("SMTP sending failed:", errorMessage);
    }
  }

  // 3. Try Webhook (Discord/Slack/Zapier) if configured
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const webhookPayload = {
        content: `🚨 **New ConvertX Lead Received!**\n**Name:** ${lead.name}\n**Company:** ${lead.company || "N/A"}\n**Email:** ${lead.email}\n**Phone:** ${lead.phone}\n**Industry:** ${lead.businessType}\n**Budget:** ${lead.monthlyBudget}\n**Services:** ${lead.servicesNeeded.join(", ") || "None"}\n**Message:** ${lead.message || "N/A"}`,
        embeds: [
          {
            title: `New Lead: ${lead.name}`,
            color: 16733440, // #FF5500
            fields: [
              { name: "Email", value: lead.email, inline: true },
              { name: "Phone", value: lead.phone, inline: true },
              { name: "Budget", value: lead.monthlyBudget, inline: true },
              { name: "Industry", value: lead.businessType, inline: true },
              { name: "Services", value: lead.servicesNeeded.join(", ") || "None" },
              { name: "Message", value: lead.message || "None" },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      };

      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
      });

      console.log(`[LEAD DISPATCHED via Webhook] -> ${process.env.LEAD_WEBHOOK_URL}`);
      return { success: true, provider: "webhook" };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error("Webhook dispatch failed:", errorMessage);
    }
  }

  // 4. Default Log fallback when no external mail provider is configured yet
  console.log("=========================================================");
  console.log(`[CONVERTX LEAD RECORDED - READY FOR EMAIL DISPATCH]`);
  console.log(`Target: ${recipientEmail}`);
  console.log(`Lead: ${lead.name} | ${lead.email} | ${lead.phone} | ${lead.businessType}`);
  console.log(`Budget: ${lead.monthlyBudget} | Services: ${lead.servicesNeeded.join(", ")}`);
  console.log(`Message: ${lead.message || "N/A"}`);
  console.log(`Tip: Add SMTP_USER & SMTP_PASS (or RESEND_API_KEY) in .env.local or Vercel to activate instant email delivery.`);
  console.log("=========================================================");

  return {
    success: true,
    provider: "console",
  };
}
