"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { experienceSchema } from "@/schemas";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";

type ExperienceFormData = z.infer<typeof experienceSchema>;

export function ExperienceForm(/* { onSubmit }: { onSubmit: (data: ExperienceFormData) => void } */) {
  const [showForm, setShowForm] = useState(false);
  const form = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceSchema),
    defaultValues: { tasks: [] },
  });

  const { register, control, handleSubmit } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  const onSubmit = (data: ExperienceFormData) => {
    console.log(data);
    // onSubmit(data);
  };

  return (
    <>
      {showForm && (
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.: Fullstack developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.: Google, Facebook, Netflix" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g.: New York, NY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
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
              control={form.control}
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
              <input type="checkbox" {...register("is_current")} /> Current Job
            </label>
            {fields.length > 0 && <FormLabel className="col-span-2">Tasks</FormLabel>}
            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`tasks.${index}.value`}
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Input placeholder="e.g.: Refactored the codebase" {...field} />
                        <Button type="button" variant="destructive" onClick={() => remove(index)}>
                          Remove
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="button" className="col-span-2 justify-self-center" onClick={() => append({ value: "" })}>
              Add Task
            </Button>
            <Button onClick={() => setShowForm(!showForm)} variant={showForm ? "outline" : "default"}>
              {showForm ? (
                "Cancel"
              ) : (
                <>
                  <Plus />
                  Add experience
                </>
              )}
            </Button>
            <Button type="submit">Save Experience</Button>
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
