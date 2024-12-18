"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormField from '@/components/CustomFormField'

export enum FormFieldType{
  INPUT='input',
  TEXTAREA='textarea',
  PHONE_INPUT='phoneInput',
  CHECKBOX='checkbox',
  DATE_PICKER='datePicker',
  SELECT='select',
  SKELETON='skeleton',
}

// Define the form schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

// Component definition
const PatientForm = () => {
  // Use the `useForm` hook to initialize form handling
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  // Render the form
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header text-cyan-300">Hi there</h1>
          <p className="text-dark-700">Shedule your first appoinment</p>
        </section>
        <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        label="Full name"
        placeholder="john doe"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
        />
    
        <Button type="submit" className="text-white">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
