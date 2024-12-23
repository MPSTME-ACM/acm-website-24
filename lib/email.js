"use server";

import { Resend } from "resend";

const resend = new Resend("re_6tfxMGxo_7F1jcXZRAq2qTvU4o7YqMnfJ");

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@acm.yashd.in>",
      to: "yashdeshpande714@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    return { success: false, message: "Failed to send email" };
  }
}
