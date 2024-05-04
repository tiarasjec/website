import nodemailer from "nodemailer";
import { renderAsync } from "@react-email/render";
import UserRegistrationEmail from "./UserRegistrationEmail";
import React from "react";
import RegistrationEmail from "./RegistrationEmail";

interface sendEmail {
  amount: number;
  email: string;
  teamNames: string[];
  contactNumber: string;
  name: string;
  events: string[];
  registrationLink: string;
}

export async function sendEmail({
  amount,
  email,
  teamNames,
  contactNumber,
  name,
  events,
  registrationLink,
}: sendEmail) {
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

    const [html2, text2] = await Promise.all([
      renderAsync(
        <RegistrationEmail
          amount={amount}
          events={events}
          email={email}
          teamNames={teamNames}
          contactNumber={contactNumber}
        />
      ),
      renderAsync(
        <RegistrationEmail
          amount={amount}
          events={events}
          email={email}
          teamNames={teamNames}
          contactNumber={contactNumber}
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
      from: `"Tiara 2024" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Tiara 2024 Registration",
      html,
      text,
    };

    const mailOptions2 = {
      from: `"Tiara 2024" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `${name} Registered for Tiara 2024!`,
      html: html2,
      text: text2,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptions2);
    return mailResponse;
  } catch (error: unknown) {
    throw error;
  }
}
