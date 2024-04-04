import NextAuth from "next-auth";
import { options } from "./options";
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(options);
