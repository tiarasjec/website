import { Job, Worker } from "bullmq";
import { connection } from "@/lib/redis";
import { EmailOptions } from "@/helper/mailer";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  socketTimeout: 30000,
});

export const userWorker = new Worker(
  "userQueue",
  async (job: Job<EmailOptions>) => {
    await transporter.sendMail(job.data);
    console.log(`User Email sent to ${job.data.to}`);
  },
  {
    autorun: false,
    connection,
    concurrency: 5,
    removeOnComplete: { count: 1000 },
    removeOnFail: { count: 5000 },
  }
);

userWorker.once("ready", () => {
  console.log("User Worker is ready");
});

userWorker.on("error", (error) => {
  console.error(`User Worker error: ${error.message}`);
});

userWorker.on("completed", (job) => {
  console.log(`User Worker completed job ${job.id}`);
});