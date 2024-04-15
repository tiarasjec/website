"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Event } from "@prisma/client";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const columns: ColumnDef<Event>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Date",
    accessorKey: "date",
    cell: ({ row }) => {
      const { original } = row;
      return (
        <div>
          {new Date(original.date).toLocaleString("en-US", {
            month: "numeric",
            day: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </div>
      );
    },
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Edit Event",
    accessorKey: "",
    id: "edit",
    cell: ({ row }) => {
      const { original } = row;
      return (
        <Button asChild>
          <Link href={`/organizer/events/${original.id}`}>Edit Event</Link>
        </Button>
      );
    },
  },
];
