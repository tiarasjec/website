"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useState, useEffect } from "react";
import { AdvancedDataTable } from "@/components/datatable";
import { DataTableCheckBox } from "@/components/datatable/data-table-checkbox";
import { Payment } from "@prisma/client";

async function getData(event: string) {
  const response = await fetch(`/api/coordinators/${event}`);
  return response.json();
}

export default function IndividualEventPage({ params }: { params: { event: string } }) {
  const filename = decodeURIComponent(params.event);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(params.event).then(setData);
  }, [params.event]);

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
      accessorKey: "name",
      id: "name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "email",
      id: "email",
      header: "Email",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "college",
      id: "college",
      header: "College",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "contact",
      id: "contact",
      header: "Contact",
      meta: {
        filterVariant: "text",
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
