"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const formSchema = z.object({
  razorpayPaymentId: z.string(),
});

function FetchRazorpayPaymentData() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/admin/razorpay/${values.razorpayPaymentId}`);
  }

  const [paymentData, setPaymentData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/razorpay`);
        const data = await res.json();
        setPaymentData(data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchData();

    // Cleanup function if necessary
    return () => {
      // Any cleanup code can go here
    };
  }, []);
  return (
    <div>
      <h1>Fetch Razorpay Payment Data</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>RazorpaymentID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>College</TableHead>
            <TableHead>Events</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentData ? (
            paymentData.items.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.notes.customerName}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  {new Date(item.created_at * 1000).toLocaleString(undefined, {
                    dateStyle: "full",
                    timeStyle: "long",
                  })}
                </TableCell>
                <TableCell>{item.notes.customerContact}</TableCell>
                <TableCell>{item.notes.college}</TableCell>
                <TableCell>
                  {item.notes.events
                    .split(",")
                    .map((event: string, i: number) => (
                      <li key={i} className="block">
                        {event}
                      </li>
                    ))}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(item.amount / 100)}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Loading...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
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
    </div>
  );
}

export default FetchRazorpayPaymentData;
