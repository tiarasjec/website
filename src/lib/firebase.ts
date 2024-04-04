import { initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const firestore = initFirestore({
  credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS!),
});
