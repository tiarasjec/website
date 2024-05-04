"use client";

import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function getData() {
  const response = await fetch("/api/coordinators");
  return response.json();
}

export default function AdminPage() {
  const [data, setData] = React.useState<
    { name: string; registrations: string }[]
  >([]);
  React.useEffect(() => {
    getData().then(setData);
  }, []);
  return (
    <>
      <Table>
        <TableCaption>List of Events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
            <TableHead>Registrations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((event, i) => (
            <Link
              key={i}
              href={`/coordinators/${event.name}`}
              legacyBehavior
            >
              <TableRow>
                <div style={{ display: "contents" }}>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.registrations}</TableCell>
                </div>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
