"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState, useEffect } from "react";
import { AdvancedDataTable } from "@/components/datatable";
import { DataTableCheckBox } from "@/components/datatable/data-table-checkbox";
import { toast } from "@/components/ui/use-toast";
import { UserRole, User, Payment } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

async function updateRole({
  id,
  role,
  name,
}: {
  id: string;
  role: Lowercase<UserRole>;
  name: string;
}) {
  const res = await fetch(`/api/admin/${id}/make-${role}`, {
    method: "POST",
  });
  if (res.status === 200) {
    toast({
      title: `${name} is now a ${role}`,
    });
  } else {
    toast({
      title: `Failed to make ${name} a ${role}`,
    });
  }
}

async function getData() {
  const response = await fetch("/api/admin");
  return response.json();
}

export default function AdminUsersTablePage() {
  const filename = "users";
  const [data, setData] = useState<(User & { payment: Payment[] })[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const columns = useMemo<ColumnDef<User & { payment: Payment[] }>[]>(
    () => [
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
        accessorKey: "events",
        id: "events",
        header: "Events",
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
        accessorKey: "role",
        id: "role",
        header: "Role",
        meta: {
          filterVariant: "select",
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
      {
        id: "actions",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() =>
                    updateRole({
                      id: user.id,
                      role: "admin",
                      name: user.name!,
                    })
                  }
                >
                  Make Admin
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    updateRole({
                      id: user.id,
                      role: "coordinator",
                      name: user.name!,
                    })
                  }
                >
                  Make Coordinator
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    updateRole({
                      id: user.id,
                      role: "participant",
                      name: user.name!,
                    })
                  }
                >
                  Make User
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    []
  );

  return (
    <AdvancedDataTable<User & { payment: Payment[] }>
      columns={columns}
      data={data}
      exportProps={{
        exportFileName: filename,
      }}
    />
  );
}
