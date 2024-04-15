import React from "react";
import { Event } from "@prisma/client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { prisma } from "@/lib/prisma";
import { Text } from "@/components/shared/text";
import { buttonVariants } from "@/components/ui/button";

async function OrganizerPage() {
  const data = await prisma.event.findMany();
  return (
    <div>
      <Text intent="h1" className="text-center">
        Events
      </Text>
      <a className={buttonVariants()} href="/organizer/create">Create Event</a>
      <DataTable<Event, string> columns={columns} data={data} />
    </div>
  );
}

export default OrganizerPage;
