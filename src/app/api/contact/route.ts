import { NextResponse } from "next/server";
import { sendLeadNotificationEmail, ContactLeadData } from "@/lib/email";

const TARGET_CONTACT_EMAIL = "convertxmediazone@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      businessType,
      monthlyBudget,
      servicesNeeded,
      message,
    } = body;

    // Server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const leadData: ContactLeadData = {
      name: String(name).trim(),
      company: company ? String(company).trim() : undefined,
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      businessType: businessType || "E-commerce",
      monthlyBudget: monthlyBudget || "₹50,000 - ₹1,50,000",
      servicesNeeded: Array.isArray(servicesNeeded) ? servicesNeeded : [],
      message: message ? String(message).trim() : undefined,
      submittedAt: new Date().toISOString(),
    };

    // Dispatch email notification through configured provider (Gmail SMTP / Resend / Webhook)
    const emailResult = await sendLeadNotificationEmail(leadData);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you! Your growth inquiry has been received. We will connect with you at ${leadData.email} or ${leadData.phone} shortly.`,
        provider: emailResult.provider,
        targetEmail: TARGET_CONTACT_EMAIL,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /api/contact Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to process lead request." },
      { status: 500 }
    );
  }
}
