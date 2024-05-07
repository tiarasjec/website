"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Signin() {
  const router = useRouter();
  const { status } = useSession();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl");

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("google");
    } else if (status === "authenticated") {
      router.push(callbackUrl || "/");
    }
  }, [status, router, callbackUrl]);

  return <div></div>;
}
