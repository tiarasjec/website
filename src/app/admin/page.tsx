"use client";

import React from "react";
import { Payment, User } from "@prisma/client";
import { DataTable } from "./_components/datatable";
import { columns } from "./_components/columnsUsers";

async function getData() {
  const response = await fetch("/api/admin");
  return response.json();
}

export default function AdminPage() {
  const [data, setData] = React.useState<(User & { payment: Payment })[]>([]);

  React.useEffect(() => {
    getData().then(setData);
  }, []);
  return <DataTable columns={columns} data={data} />;
}
