"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/schemas";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";

type ProjectFormData = z.infer<typeof projectSchema>;

export function ProjectForm(/* { onSubmit }: { onSubmit: (data: ExperienceFormData) => void } */) {
  const [showForm, setShowForm] = useState(false);
  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: { tasks: [] },
  });

  const { control, handleSubmit } = form;

  const {
    fields: taskFields,
    append: taskAppend,
    remove: taskRemove,
  } = useFieldArray({
    control,
    name: "tasks",
  });

  const {
    fields: techFields,
    append: techAppend,
    remove: techRemove,
  } = useFieldArray({
    control,
    name: "technologies",
  });

  const onSubmit = (data: ProjectFormData) => {
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
                    <Input placeholder="e.g.: To-do application" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://myproject.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repository</FormLabel>
                  <FormControl>
                    <Input placeholder="https://github.com/MyProject" {...field} />
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
            {taskFields.length > 0 && <FormLabel className="col-span-2">Tasks</FormLabel>}
            {taskFields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`tasks.${index}.value`}
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Input placeholder="e.g.: Refactored the codebase" {...field} />
                        <Button type="button" variant="destructive" onClick={() => taskRemove(index)}>
                          Remove
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            {techFields.length > 0 && <FormLabel className="col-span-2">Technologies</FormLabel>}
            {techFields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`technologies.${index}.value`}
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Input placeholder="e.g.: Next.js" {...field} />
                        <Button type="button" variant="destructive" onClick={() => techRemove(index)}>
                          Remove
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="button" onClick={() => taskAppend({ value: "" })}>
              Add Task
            </Button>
            <Button type="button" onClick={() => techAppend({ value: "" })}>
              Add Technology
            </Button>
            <Button onClick={() => setShowForm(!showForm)} variant={showForm ? "outline" : "default"}>
              {showForm ? (
                "Cancel"
              ) : (
                <>
                  <Plus />
                  Add project
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
