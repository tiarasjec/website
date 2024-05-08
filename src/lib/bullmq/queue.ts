import { Queue } from "bullmq";
import { connection } from "@/lib/redis";
import { EmailOptions } from "@/helper/mailer";

const createQueue = (name: string) => {
  return new Queue<EmailOptions>(name, {
    connection,
    defaultJobOptions: {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
    },
  });
}

export const userQueue = createQueue("userQueue");
