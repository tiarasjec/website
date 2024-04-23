import nodemailer from "nodemailer";
import { renderAsync } from "@react-email/render";
import UserRegistrationEmail from "./UserRegistrationEmail";
import React from "react";

export async function sendEmail(
  email: string,
  name: string,
  events: string[],
  registrationLink: string
) {
  try {
    const [html, text] = await Promise.all([
      renderAsync(
        <UserRegistrationEmail
          events={events}
          name={name}
          registrationLink={registrationLink}
        />
      ),
      renderAsync(
        <UserRegistrationEmail
          events={events}
          name={name}
          registrationLink={registrationLink}
        />,
        {
          plainText: true,
        }
      ),
    ]);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Tiara 2024 Registration",
      html,
      text,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: unknown) {
    throw error;
  }
}
