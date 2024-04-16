"use client";
import React, { useState } from "react";
import { makePaymentProps } from "./BuyProduct";

interface Props {
  makePayment: (props: makePaymentProps) => void;
}

const Buy: React.FC<Props> = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
      <button
        onClick={() => {
          makePayment({
            productId: null,
            productName: "Product Name",
            description: "Product Description",
            prefillData: {
              name: "John Doe",
              email: "johndoe@email.com",
              contact: "9876543210",
            },
          });
        }}
        disabled={isLoading}
        className={`bg-blue-500 text-white font-semibold mt-20 py-2 px-4 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Buy Now"}
      </button>
  );
};

export default Buy;
