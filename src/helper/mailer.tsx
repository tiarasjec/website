import { renderAsync } from "@react-email/render";
import UserRegistrationEmail from "./UserRegistrationEmail";
import React from "react";
import RegistrationEmail from "./RegistrationEmail";
import { addToQueue } from "@/lib/bullmq";

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
}

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

    const mailOptions: EmailOptions = {
      from: `"Tiara 2024" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Tiara 2024 Registration",
      html,
      text,
    };

    const mailOptions2: EmailOptions = {
      from: `"Tiara 2024" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER!,
      subject: `${name} Registered for Tiara 2024!`,
      html: html2,
      text: text2,
    };

    addToQueue(mailOptions);
    addToQueue(mailOptions2);
  } catch (error: unknown) {
    throw error;
  }
}
