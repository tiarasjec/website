import { firestore } from "@/lib/firebase";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import type { NextAuthConfig } from "next-auth";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";

// Doesn't give image and other details, please check
export const options: NextAuthConfig = {
  providers: [
    GoogleProvider({
      allowDangerousEmailAccountLinking: true,
      profile: (profile: GoogleProfile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  adapter: FirestoreAdapter(firestore),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (typeof token.id === "string") {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

declare module "next-auth" {
  interface User {
    id?: string;
  }

  interface Session {
    user: User;
  }
}
