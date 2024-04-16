"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";

const BuyProduct = () => {
  const router = useRouter();

  return (
    <>
      <Suspense fallback={null}>
        <Buy />
      </Suspense>
    </>
  );
};

export default BuyProduct;
