"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const teamSchema = z.object({
  name: z.string().min(6, { message: "Team name must be at least 6 characters." }),
  event: z.string(),
});

const contactSchema = z.object({
  email: z.string().email({ message: "Invalid email format." }),
  phone: z.string().regex(/^\d{10}$/i, { message: "Invalid phone number format." }),
});

const formSchema = z.object({
  events: z.array(z.string()),
  teams: z.array(teamSchema),
  contact: contactSchema,
});



const events = [
  { name: "Event 1", cost: 100 },
  { name: "Event 2", cost: 50 },
  { name: "Event 3", cost: 75 },
];



export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField name="events">
          <FormLabel>Events</FormLabel>
          <FormControl>
            {events.map((event) => (
              <label key={event.name} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={event.name}
                  {...form.register("events")}
                />
                <span>{event.name} - {event.cost}</span>
              </label>
            ))}
          </FormControl>
          <FormMessage>{form.formState.errors.events?.message}</FormMessage>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ProfileForm;