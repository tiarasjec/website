import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { Email } from "./Email";
import UserRegistrationEmail from "./UserRegistrationEmail";
import React from "react";

export async function sendEmail(email: string, name: string) {
  const emailHtml = render(
    <UserRegistrationEmail
      username="username"
      registrationId="registrationId"
      teamName="teamName"
      registrationLink="registrationLink"
    />
  );
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "tiara@gmail.com",
      to: email,
      subject: "Testing email for now", // Email subject
      html: emailHtml,
    };

    // Send email
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: unknown) {
    throw error;
  }
}
