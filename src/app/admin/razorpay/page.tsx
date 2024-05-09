"use client";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { AdvancedDataTable } from "@/components/datatable";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState, useEffect } from "react";
import { DataTableCheckBox } from "@/components/datatable/data-table-checkbox";

export interface Root {
  entity: string;
  count: number;
  items: Item[];
}

export interface Item {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  status: string;
  order_id: string;
  invoice_id: any;
  international: boolean;
  method: string;
  amount_refunded: number;
  refund_status: any;
  captured: boolean;
  description: string;
  card_id: any;
  bank: any;
  wallet?: string;
  vpa?: string;
  email: string;
  contact: string;
  notes: any;
  fee: number;
  tax: number;
  error_code: any;
  error_description: any;
  error_source: any;
  error_step: any;
  error_reason: any;
  acquirer_data: AcquirerData;
  created_at: number;
  upi?: Upi;
}

export interface AcquirerData {
  rrn?: string;
  upi_transaction_id?: string;
  transaction_id: any;
}

export interface Upi {
  vpa: string;
}

const formSchema = z.object({
  razorpayPaymentId: z.string(),
});

async function getData() {
  const response = await fetch("/api/razorpay");
  const json = await response.json();
  return json;
}

function FetchRazorpayPaymentData() {
  const filename = "razorpay";
  const [data, setData] = useState<Root[]>([]);
  const router = useRouter();

  useEffect(() => {
    getData().then(setData);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/admin/razorpay/${values.razorpayPaymentId}`);
  }

  const columns = useMemo<ColumnDef<Item>[]>(
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
        accessorKey: "items.notes.customerName",
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
    ],
    []
  );

  const flattenedData = data.flatMap((rootItem) => rootItem.items);

  return (
    <>
      <h2 className="mt-10">Search by Razorpay Payment ID</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="razorpayPaymentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Razorpayment ID:</FormLabel>
                <FormControl>
                  <Input placeholder="pay_O69OS3rml4xT8K" {...field} />
                </FormControl>
                <FormDescription>
                  Search for a payment by its Razorpay Payment ID
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
{/* 
      <AdvancedDataTable<Item>
        columns={columns}
        data={flattenedData}
        exportProps={{
          exportFileName: filename,
        }}
      /> */}
    </>

    // <div>
    //   <h1>Fetch Razorpay Payment Data</h1>
    //   <Table>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead>Name</TableHead>
    //         <TableHead>RazorpaymentID</TableHead>
    //         <TableHead>Email</TableHead>
    //         <TableHead>Time</TableHead>
    //         <TableHead>Phone</TableHead>
    //         <TableHead>College</TableHead>
    //         <TableHead>Events</TableHead>
    //         <TableHead className="text-right">Amount</TableHead>
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {paymentData ? (
    //         paymentData.items.map((item: any) => (
    //           <TableRow key={item.id}>
    //             <TableCell>{item.notes.customerName}</TableCell>
    //             <TableCell>{item.id}</TableCell>
    //             <TableCell>{item.email}</TableCell>
    //             <TableCell>
    //               {new Date(item.created_at * 1000).toLocaleString(undefined, {
    //                 dateStyle: "full",
    //                 timeStyle: "long",
    //               })}
    //             </TableCell>
    //             <TableCell>{item.notes.customerContact}</TableCell>
    //             <TableCell>{item.notes.college}</TableCell>
    //             {/* <TableCell>
    //               {(item.notes.events || [])
    //                 .split(",")
    //                 .map((event: string, i: number) => (
    //                   <li key={i} className="block">
    //                     {event}
    //                   </li>
    //                 ))}
    //             </TableCell> */}
    //             <TableCell className="text-right">
    //               {new Intl.NumberFormat("en-IN", {
    //                 style: "currency",
    //                 currency: "INR",
    //               }).format(item.amount / 100)}
    //             </TableCell>
    //           </TableRow>
    //         ))
    //       ) : (
    //         <TableRow>
    //           <TableCell>Loading...</TableCell>
    //         </TableRow>
    //       )}
    //     </TableBody>
    //   </Table>
    // </div>
  );
}

export default FetchRazorpayPaymentData;
