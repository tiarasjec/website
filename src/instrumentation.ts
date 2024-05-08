import { Job } from "bullmq";
import { EmailOptions } from "@/helper/mailer";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { Worker } = await import("bullmq");
    const { connection } = await import("@/lib/redis");
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const userWorker = new Worker(
      "userQueue",
      async (job: Job<EmailOptions>) => {
        await transporter.sendMail(job.data);
        console.log(`User Email sent to ${job.data.to}`);
      },
      {
        connection,
        concurrency: 5,
        removeOnComplete: { count: 1000 },
        removeOnFail: { count: 5000 },
      }
    );

    userWorker.once("ready", () => {
      console.log("User Worker is ready");
    });

    const selfWorker = new Worker(
      "selfQueue",
      async (job: Job<EmailOptions>) => {
        await transporter.sendMail(job.data);
        console.log(`Self Email sent to ${job.data.to}`);
      },
      {
        connection,
        concurrency: 5,
        removeOnComplete: { count: 1000 },
        removeOnFail: { count: 5000 },
      }
    );

    selfWorker.once("ready", () => {
      console.log("Self Worker is ready");
    });
  }
}
