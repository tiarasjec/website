"use client";
import { makePayment } from "@/lib/utils";
import React, { useState } from "react";
import {Button} from "@/components/ui/button";

interface Props {
  makePayment: (productId: object) => void;
}

interface UserData {
  name: string;
  email: string;
  contact: string;
  amount: number;
}

const Buy = (userData: {
  amount: number;
  contact: string;
  email: string;
  name: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
      <Button
        onClick={() => {
          console.log(userData);
          makePayment({
            productId: null,
            productName: "Tiara Registration",
            description: "Product Description",
            amount: userData.amount,
            prefillData: {
              name: userData.name,
              email: userData.email,
              contact: userData.contact,
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
