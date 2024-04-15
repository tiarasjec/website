"use client";
import React, { useState } from "react";

interface Props {
  makePayment: (productId: object) => void;
}

const Buy: React.FC<Props> = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
      <button
        onClick={() => {
          makePayment({ productId: "example_ebook" });
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
