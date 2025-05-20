"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { educationSchema } from "@/schemas";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";

type EducationFormData = z.infer<typeof educationSchema>;

export function EducationForm(/* { onSubmit }: { onSubmit: (data: ExperienceFormData) => void } */) {
  const [showForm, setShowForm] = useState(false);
  const form = useForm<EducationFormData>({
    resolver: zodResolver(educationSchema),
    defaultValues: {},
  });

  const { register, control, handleSubmit } = form;

  const onSubmit = (data: EducationFormData) => {
    console.log(data);
    // onSubmit(data);
  };

  return (
    <>
      {showForm && (
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="school"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>School</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.: MIT" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.: Boston, MA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.: Bachelor's" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="field"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field of study</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.: Engineering" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="start_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="end_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <label className="col-start-2">
              <input type="checkbox" {...register("is_current")} /> Current degree
            </label>
            <Button onClick={() => setShowForm(!showForm)} variant={showForm ? "outline" : "default"}>
              {showForm ? (
                "Cancel"
              ) : (
                <>
                  <Plus />
                  Add education
                </>
              )}
            </Button>
            <Button type="submit">Save Education</Button>
          </form>
        </Form>
      )}
      {!showForm && (
        <Button onClick={() => setShowForm(!showForm)} className="mt-4">
          <Plus />
          Add education
        </Button>
      )}
    </>
  );
}
