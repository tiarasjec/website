"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export interface Root {
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
  wallet: any;
  vpa: string;
  email: string;
  contact: string;
  notes: Notes;
  fee: number;
  tax: number;
  error_code: any;
  error_description: any;
  error_source: any;
  error_step: any;
  error_reason: any;
  acquirer_data: AcquirerData;
  created_at: number;
  upi: Upi;
}

export interface Notes {
  customerName: string;
  customerEmail: string;
  customerContact: string;
  college: string;
  events: string;
}

export interface AcquirerData {
  rrn: string;
  upi_transaction_id: string;
}

export interface Upi {
  vpa: string;
}

async function sendEmail(paymentId: string) {
  const res = await fetch(`/api/admin/sendEmail/${paymentId}`, {
    method: "POST",
  });
  if (res.status === 200) {
    toast({
      title: "Email sent",
      description: "Email sent successfully",
    });
  } else {
    toast({
      title: "Error",
      description: "Error sending email",
      variant: "destructive",
    });
  }
}

function FetchRazorpayPaymentData({ params }: { params: { id: string } }) {
  const { id } = params;
  const [paymentData, setPaymentData] = useState<Root | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/razorpay/${id}`);
        const data = await res.json();
        setPaymentData(data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Data of {paymentData?.notes.customerName}</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>
          Payment ID
          <Input value={paymentData?.id} disabled />
        </Label>
        <Label>
          Amount
          <Input
            value={new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format((paymentData?.amount ?? 0) / 100!)}
            disabled
          />
        </Label>
        <Label>
            Email
            <Input value={paymentData?.email} disabled />
        </Label>
        <Label>
          Phone
          <Input value={paymentData?.contact} disabled />
        </Label>
        <Label>
          College
          <Input value={paymentData?.notes.college} disabled />
        </Label>
        <Label>
            Created At
            <Input
              value={new Date(paymentData?.created_at! * 1000).toLocaleString(
                undefined,
                {
                  dateStyle: "full",
                  timeStyle: "long",
                }
              )}
              disabled
            />
        </Label>
        <Label>
          Events
          <div className="flex flex-col gap-3 mt-5">
            {paymentData?.notes.events
              .split(", ")
              .map((event: string, i: number) => (
                <li key={i} className="block">
                  * {event}
                </li>
              ))}
          </div>
        </Label>
      </CardContent>
      <CardFooter className="justify-end">
        <Button onClick={async () => await sendEmail(paymentData?.id!)}>
          Send Email
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FetchRazorpayPaymentData;
