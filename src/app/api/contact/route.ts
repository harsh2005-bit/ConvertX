import { NextResponse } from "next/server";

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

    const leadPayload = {
      targetNotificationEmail: TARGET_CONTACT_EMAIL,
      submittedAt: new Date().toISOString(),
      leadDetails: {
        name,
        company: company || "N/A",
        email,
        phone,
        businessType: businessType || "E-commerce",
        monthlyBudget: monthlyBudget || "₹50,000 - ₹1,50,000",
        servicesNeeded: servicesNeeded || [],
        message: message || "No additional message provided",
      },
    };

    // Log incoming lead dispatch to server output
    console.log("==========================================");
    console.log(`[NEW CONVERTX LEAD REQUEST RECEIVED] -> Sending to ${TARGET_CONTACT_EMAIL}`);
    console.log(JSON.stringify(leadPayload, null, 2));
    console.log("==========================================");

    // Optional Webhook / Email integration hook (e.g. Resend, Webhook URL, or SMTP)
    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      }).catch((err) => console.error("Webhook notification error:", err));
    }

    return NextResponse.json(
      {
        success: true,
        message: `Lead submission received! Request routed to ${TARGET_CONTACT_EMAIL}.`,
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
