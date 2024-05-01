import React from "react";
import { auth } from "@/auth";
import { Payment, User, UserRole } from "@prisma/client";
import { DataTable } from "./_components/datatable";
import { columns } from "./_components/columns";

async function getData() {
  const response = await fetch("http://localhost:3000/api/users");
  return response.json();
}

async function AdminPage() {
  const session = await auth();
  if (!session) {
    return <div>Not Authenticated</div>;
  }

  if (session.user.role !== UserRole.ADMIN) {
    return <div>Not Authorized</div>;
  }

  const data = await getData();

  return <DataTable columns={columns} data={data} />;
}

export default AdminPage;
