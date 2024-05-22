"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useState, useEffect } from "react";
import { AdvancedDataTable } from "@/components/datatable";
import { DataTableCheckBox } from "@/components/datatable/data-table-checkbox";
import { Payment } from "@prisma/client";

async function getData() {
  const response = await fetch("/api/admin/payments");
  return response.json();
}

export default function AdminPaymentsTablePage() {
  const filename = "payments";
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <DataTableCheckBox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <DataTableCheckBox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
      size: 20,
    },
    {
      header: "Name",
      accessorKey: "user.name",
      id: "name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "user.email",
      id: "email",
      header: "Email",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "razorpayPaymentId",
      id: "razorpayPaymentId",
      header: "Razorpay Payment ID",
    },
    {
      accessorKey: "user.events",
      id: "events",
      header: "Events",
      meta: {
        filterVariant: "text",
      },
      cell: ({ row }) => {
        // @ts-ignore
        return row.original.user.events.map((event, i) => (
          <div key={i}>{event}</div>
        ));
      },
    },
    {
      accessorKey: "user.college",
      id: "college",
      header: "College",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "user.contact",
      id: "contact",
      header: "Contact",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "amount",
      id: "amount",
      header: "Amount",
      meta: {
        filterVariant: "text",
      },
      cell: ({ row }) => {
        return new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(row.original.amount / 100);
      },
    },
  ];

  return (
    <AdvancedDataTable<Payment>
      columns={columns}
      data={data}
      exportProps={{
        exportFileName: filename,
      }}
    />
  );
}
