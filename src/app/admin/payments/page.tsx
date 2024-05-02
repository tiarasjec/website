"use client";

import React from "react";
import { Payment, UserRole } from "@prisma/client";
import { DataTable } from "../_components/datatablepayments";
import { columns } from "../_components/columnsPayments";
import { useSession } from "next-auth/react";

async function getData() {
  const response = await fetch("/api/admin/payments");
  return response.json();
}

export default function AdminPage() {
  const { data: session } = useSession();
  const [data, setData] = React.useState<Payment[]>([]);

  React.useEffect(() => {
    getData().then(setData);
  }, []);

  if (!session) {
    return <div>Unauthorized</div>;
  }

  if (session.user.role !== UserRole.ADMIN) {
    return <div>Forbidden</div>;
  }

  return (
    <>
      <h1>Please note few inital payments, do not exists due to some issue with the database write.</h1>
      <DataTable columns={columns} data={data} />
    </>
  );
}
