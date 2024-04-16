"use client";
import { makePayment } from "@/lib/utils";
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import { set } from "react-hook-form";

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
          setIsLoading(true);
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
        disabled={(userData.amount === 0 || isLoading) ? true : false}
        className={` font-semibold py-2 px-4 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </Button>
  );
};

export default Buy;
