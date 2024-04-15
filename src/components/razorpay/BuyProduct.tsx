"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const BuyProduct = () => {
  const router = useRouter();

  const makePayment = async ({ productId = null }) => {
    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);
    const data = await fetch("http://localhost:3000/api/razorpay");
    const { order } = await data.json();
    console.log(order.id);
    const options = {
      key: key,
      name: "Joywin Bennis",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "Tiara Registration Fee",
      prefill: {
        name: "Lord Joywin",
        email: "joywinbennis@gmail.com",
        contact: "9354536067",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response: any) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  return (
    <>
      <Suspense fallback={null}>
        <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default BuyProduct;
