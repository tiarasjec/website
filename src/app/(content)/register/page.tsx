import React from "react";
import { auth, signIn } from "@/auth";
import { Register } from "./_components/Register";

async function RegisterPage() {
  const session = await auth();
  if (!session) {
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    />;
  }
  return <Register name={session?.user.name!} email={session?.user.email!} />;
}

export default RegisterPage;
