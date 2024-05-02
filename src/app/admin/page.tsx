"use client";

import React from "react";
import { Payment, User, UserRole } from "@prisma/client";
import { DataTable } from "./_components/datatable";
import { columns } from "./_components/columnsUsers";
import { useSession } from "next-auth/react";

async function getData() {
  const response = await fetch("/api/admin");
  return response.json();
}

export default function AdminPage() {
  const { data: session } = useSession();
  const [data, setData] = React.useState<(User & { payment: Payment })[]>([]);

  React.useEffect(() => {
    getData().then(setData);
  }, []);

  if (!session) {
    return <div>Unauthorized</div>;
  }

  if (session.user.role !== UserRole.ADMIN) {
    return <div>Forbidden</div>;
  }
  return <DataTable columns={columns} data={data} />;
}
