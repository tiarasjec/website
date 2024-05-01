"use client";
import { ColumnDef } from "@tanstack/react-table";
import { User, Payment } from "@prisma/client";

// We concat the User and Payment types to create a new type, as the same will be returned by the API, fetched from the database.
export const columns: ColumnDef<User & { payment: Payment }>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Contact",
    accessorKey: "contact",
  },
];
