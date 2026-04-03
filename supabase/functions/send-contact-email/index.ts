import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().default(""),
  product: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, phone, product, message } = parsed.data;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    };

    // 1. Send confirmation email to the user
    const userEmailRes = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: "Rout Enterprises <noreply@routenterprises.com>",
        to: [email],
        subject: "Thank you for your inquiry – Rout Enterprises",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Rout Enterprises</h1>
              <p style="color: #d4a843; margin: 5px 0 0; font-size: 14px;">Export &amp; Import of Stainless Steel Products</p>
            </div>
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
              <h2 style="color: #1a1a2e; margin-top: 0;">Thank you, ${name}!</h2>
              <p style="color: #555; line-height: 1.6;">
                We have received your inquiry regarding <strong>${product}</strong> and our team will review it shortly.
              </p>
              <p style="color: #555; line-height: 1.6;">
                We typically respond within 24 hours with competitive pricing and product details.
              </p>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="color: #333; margin: 0 0 5px; font-weight: bold;">Your Message:</p>
                <p style="color: #555; margin: 0; line-height: 1.5;">${message}</p>
              </div>
              <p style="color: #555; line-height: 1.6;">
                If you have any urgent requirements, feel free to reach us at <a href="tel:+918446055949" style="color: #d4a843;">+91 84460 55949</a> or via <a href="https://wa.me/918446055949" style="color: #d4a843;">WhatsApp</a>.
              </p>
              <p style="color: #555;">Best regards,<br/><strong>Rout Enterprises Team</strong></p>
            </div>
            <div style="background: #1a1a2e; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="color: #888; margin: 0; font-size: 12px;">102/A-Wing, Saipooja Apt, Trivedi Nagar, Saravali, Boisar - 401501</p>
              <p style="color: #888; margin: 5px 0 0; font-size: 12px;">globalexport@routenterprises.com | sales@routenterprises.com</p>
            </div>
          </div>
        `,
      }),
    });

    if (!userEmailRes.ok) {
      const err = await userEmailRes.text();
      console.error("Failed to send user email:", err);
    }

    // 2. Send notification email to the business owner
    const ownerEmailRes = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: "Rout Enterprises Website <noreply@routenterprises.com>",
        to: ["akashrout1211@gmail.com"],
        subject: `New Inquiry: ${product} – from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #d4a843; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #1a1a2e; margin: 0; font-size: 20px;">📩 New Website Inquiry</h1>
            </div>
            <div style="background: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #888; width: 120px; vertical-align: top;">Name:</td>
                  <td style="padding: 8px 0; color: #333; font-weight: bold;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #888; vertical-align: top;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #d4a843;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #888; vertical-align: top;">Product:</td>
                  <td style="padding: 8px 0; color: #333; font-weight: bold;">${product}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #888; vertical-align: top;">Message:</td>
                  <td style="padding: 8px 0; color: #333;">${message}</td>
                </tr>
              </table>
              <div style="margin-top: 20px;">
                <a href="mailto:${email}" style="display: inline-block; background: #d4a843; color: #1a1a2e; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
              </div>
            </div>
            <div style="padding: 10px; text-align: center;">
              <p style="color: #aaa; font-size: 11px; margin: 0;">Sent from routenterprises.com contact form</p>
            </div>
          </div>
        `,
      }),
    });

    if (!ownerEmailRes.ok) {
      const err = await ownerEmailRes.text();
      console.error("Failed to send owner email:", err);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
