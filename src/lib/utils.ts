import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "@/components/ui/use-toast";
import { Teams } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseURL = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}/`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`
  : `http://localhost:${process.env.PORT ?? 3000}/`;

export const tiaraAssetsPrefix = "https://assets.tiarasjec.in";

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
    college: string;
    contact: string;
    events: string[];
    teams: Teams[];
  };
}

interface RazorpaySuccesshandlerArgs {
  razorpay_signature: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  image?: string;
  order_id: string;
  handler?: (args: RazorpaySuccesshandlerArgs) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
    method?: "card" | "netbanking" | "wallet" | "emi" | "upi";
  };
  notes?: {};
  theme?: {
    hide_topbar?: boolean;
    color?: string;
    backdrop_color?: string;
  };
  modal?: {
    backdropclose?: boolean;
    escape?: boolean;
    handleback?: boolean;
    confirm_close?: boolean;
    ondismiss?: () => void;
    animation?: boolean;
  };
  subscription_id?: string;
  subscription_card_change?: boolean;
  recurring?: boolean;
  callback_url?: string;
  redirect?: boolean;
  customer_id?: string;
  timeout?: number;
  remember_customer?: boolean;
  readonly?: {
    contact?: boolean;
    email?: boolean;
    name?: boolean;
  };
  hidden?: {
    contact?: boolean;
    email?: boolean;
  };
  send_sms_hash?: boolean;
  allow_rotation?: boolean;
  retry?: {
    enabled?: boolean;
    max_count?: boolean;
  };
  config?: {
    display: {
      language: "en" | "ben" | "hi" | "mar" | "guj" | "tam" | "tel";
    };
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
    body: JSON.stringify({ amount, prefillData }),
  });
  const { orderId } = await response.json();
  const options: RazorpayOptions = {
    key: key!,
    name: productName,
    image: `${tiaraAssetsPrefix}/t24.png`,
    currency: "INR",
    amount: amount,
    order_id: orderId,
    description: description,
    prefill: {
      name: prefillData.name,
      email: prefillData.email,
      contact: prefillData.contact,
    },
    notes: {
      customerName: prefillData.name,
      customerEmail: prefillData.email,
      customerContact: prefillData.contact,
      college: prefillData.college,
      events: prefillData.events.join(", "),
    },
    handler: async function (response) {
      const data = {
        amount: amount,
        orderCreationId: orderId,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        college: prefillData.college,
        events: prefillData.events,
        teams: prefillData.teams,
        phone: prefillData.contact,
      };

      const result = await fetch("/api/razorpay/verify", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const res = await result.json();
      if (res.isOk) {
        toast({
          title: "✅ Payment successful",
          description: "Your payment was successful",
        });
        window.location.href = "/";
      } else {
        toast({
          title: "❌ Payment failed",
          description:
            "Please try again. Contact support for help. " + res.error,
          variant: "destructive",
        });
      }
    },
  };

  const paymentObject = new window.Razorpay(options);

  paymentObject.on("payment.failed", function (response: any) {
    toast({
      variant: "destructive",
      title: "Payment failed",
      description:
        "Please try again. Contact support for help. " +
        response.error.description,
    });
  });
  paymentObject.open();
};
