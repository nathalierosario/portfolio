"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { text } from "stream/consumers";

const ContactFormSchema = z.object({
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

export type ContactFormState = {
  errors?: {
    subject?: string[];
    message?: string[];
  };
  statusMessage?: string | null;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const result = ContactFormSchema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      statusMessage: "error test",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailContents = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_USERNAME,
    subject: result.data.subject,
    text: result.data.message,
  };

  try {
    await transporter.sendMail(mailContents);

    return {
      errors: {},
      statusMessage: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      errors: {},
      statusMessage: "Error sending message",
    };
  }
}
