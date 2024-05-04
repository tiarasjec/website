"use client";

import React from "react";
import { DataTable } from "../_components/datatablepayments";
import { columns } from "../_components/columnsPayments";
import { Payment } from "@prisma/client";

async function getData() {
  const response = await fetch("/api/admin/payments");
  return response.json();
}

export default function AdminPaymentsPage() {
  const [data, setData] = React.useState<Payment[]>([]);

  React.useEffect(() => {
    getData().then(setData);
  }, []);
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}
