import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";
import Google, { GoogleProfile } from "next-auth/providers/google";
import type { Adapter } from 'next-auth/adapters';

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    role: UserRole;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role as UserRole ?? UserRole.PARTICIPANT,
        };
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (user.id && session.user) {
        session.user.id = user.id;
      }

      if (user.role && session.user) {
        session.user.role = user.role as UserRole;
      }

      if (session.user) {
        session.user.name = user.name;
        session.user.email = user.email as string;
      }

      return session;
    },
  },
});
