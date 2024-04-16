"use client";
import { makePayment } from "@/lib/utils";
import React, { useState } from "react";
import {Button} from "@/components/ui/button";

interface Props {
  makePayment: (productId: object) => void;
}

const Buy: React.FC<Props> = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
      <Button
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
        className={` font-semibold mt-20 py-2 px-4 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Buy Now"}
      </Button>
  );
};

export default Buy;
