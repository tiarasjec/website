"use client";
import React from "react";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import * as z from "zod";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  name: z.string({
    required_error: "Enter the name of the event.",
  }),
  description: z.string({
    required_error: "Description of the event is required.",
  }),
  location: z.string({
    required_error: "Location of the event is required.",
  }),
  date: z.coerce.date({
    required_error: "",
  }),
  image: z.string(),
});

function OrganizerEventCreatePage() {
  const user = useSession().data?.user;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const body = JSON.stringify({
      userId: user?.id,
      name: values.name,
      description: values.description,
      date: values.date,
      image: values.image,
      location: values.location,
      user,
    });
    await fetch("/api/organizer/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then(() => console.log("Yeetus Feetus"));
  }
  return (
    <AutoForm
      onSubmit={onSubmit}
      formSchema={formSchema}
      fieldConfig={{
        description: {
          fieldType: "textarea",
        },
        image: {
          fieldType: "file",
        },
      }}
    >
      <AutoFormSubmit>Create</AutoFormSubmit>
    </AutoForm>
  );
}

export default OrganizerEventCreatePage;
