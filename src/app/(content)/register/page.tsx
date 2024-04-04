"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function RegisterPage() {
  const { data: session } = useSession({
    required: true,
  });
  console.log(session?.user?.image);
  return <div>{session?.user?.name}{"'"}s RegisterPage</div>;
}
