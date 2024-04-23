"use client";
import { makePayment } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Teams } from "@/lib/interfaces";

const Buy = (userData: {
  events: string[];
  teams: Teams[];
  amount: number;
  college: string;
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
          productName: "Tiara 2024",
          description: "Tiara is a National-level Techno-Cultural fest, conducted for young minds aspiring to be extraordinary.",
          amount: userData.amount,
          prefillData: {
            name: userData.name,
            email: userData.email,
            college: userData.college,
            contact: userData.contact,
            teams: userData.teams,
            events: userData.events,
          },
        });
      }}
      disabled={
        userData.amount === 0 ||
        userData.college.length === 0 ||
        userData.contact.length < 10 ||
        userData.events.length === 0 ||
        (userData.teams.length > 0 &&
          userData.teams.some((team) => team.name.length === 0)) ||
        isLoading
          ? true
          : false
      }
      
      className={` font-semibold py-2 px-4 rounded ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Processing..." : "Pay Now"}
    </Button>
  );
};

export default Buy;
