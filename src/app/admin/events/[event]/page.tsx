"use client";
import React from "react";
import { DataTable } from "../../../coordinators/_components/datatable";
import { columns } from "../../../coordinators/_components/columns";

async function getData(event: string) {
  const response = await fetch(`/api/coordinators/${event}`);
  return response.json();
}

function PerEventPage({ params }: { params: { event: string } }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData(params.event).then(setData);
  }, [params.event]);
  return (
    <>
      <h1>{decodeURIComponent(params.event)} Participants</h1>
      <DataTable columns={columns} data={data} />
    </>
  );
}

export default PerEventPage;
