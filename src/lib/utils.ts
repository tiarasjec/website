import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseURL = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}/`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`
  : `http://localhost:${process.env.PORT ?? 3000}/`;

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface makePaymentProps {
  productId: string | null;
  productName: string;
  description: string;
  amount: number;
  prefillData: {
    name: string;
    email: string;
    contact: string;
  };
}

export const makePayment = async ({
  productId = null,
  productName,
  description,
  prefillData,
  amount,
}: makePaymentProps) => {
  const key = process.env.RAZORPAY_API_KEY;
  const response = await fetch("/api/razorpay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Assuming the API expects JSON
    },
    body: JSON.stringify({ amount }), // Pass amount as a parameter in the request body
  });
  const { order } = await response.json();
  console.log(order.id);
  const options = {
    key: key,
    name: productName,
    currency: order.currency,
    amount: amount,
    order_id: order.id,
    description: description,
    prefill: {
      name: prefillData.name,
      email: prefillData.email,
      contact: prefillData.contact,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  paymentObject.on("payment.failed", function (response: any) {
    alert("Payment failed. Please try again. Contact support for help");
  });
};
