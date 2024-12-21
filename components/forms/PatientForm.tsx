"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormField from '@/components/CustomFormField'
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/router";

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

// Component definition
const PatientForm = () => {
  const router = useRouter
  const [isLoading,setisLoading]=useState(false)
  // Use the `useForm` hook to initialize form handling
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name:"",
      email:"",
      phone:"",
    },
  });

  // Handle form submission
  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    setisLoading(true);
    try {
     // const userData={name,email,phone };
     //const user =  await createUser(userData);

     // if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }
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
      
          <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="email"
        label="Email"
        placeholder="johndoe@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="user"
        />
          <CustomFormField
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name="phone"
        label="Phone number"
        placeholder="0123456789"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
        />
    
    <SubmitButton isLoading={isLoading} >Get started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
