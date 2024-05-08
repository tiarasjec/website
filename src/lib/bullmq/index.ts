import { userQueue } from "./queue";
import { userWorker } from "./worker";
import { EmailOptions } from "@/helper/mailer";

export async function addToQueue(emailOptions: EmailOptions) {
    try {
        await userQueue.add("sendEmail", emailOptions);
    } catch (error) {
        console.error(`Error sending email: ${(error as Error).message}`);
    }
}

userWorker.run();
