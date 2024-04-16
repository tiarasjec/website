"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const BuyProduct = ({
  name,
  email,
  contact,
  amount,
}: {
  name: string;
  email: string;
  contact: string;
  amount: number;
}) => {
  const router = useRouter();
  return (
    <>
      <Suspense fallback={null}>
        <Buy
          name={name}
          email={email}
          contact={contact}
          amount={amount}
        />
      </Suspense>
    </>
  );
};

export default BuyProduct;
