import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "@/components/ui/use-toast";

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
  const { orderId } = await response.json();
  const options = {
    key: key,
    name: productName,
    currency: "INR",
    amount: amount,
    order_id: orderId,
    description: description,
    prefill: {
      name: prefillData.name,
      email: prefillData.email,
      contact: prefillData.contact,
    },
    handler: async function (response: any) {
      const data = {
        orderCreationId: orderId,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await fetch("/api/razorpay/verify", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const res = await result.json();
      if (res.isOk) {
        toast({
          title: "Payment successful",
          description: "Your payment was successful",
        });
        window.location.href = "/";
      } else {
        toast({
          title: "Payment failed",
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
