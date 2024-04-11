"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function AdminPage() {
  const { data: session } = useSession();
  if (session && session.user?.email !== process.env.ADMIN_EMAIL) {
    return <div>Not authorized</div>;
  }
  return <div>page</div>;
}
