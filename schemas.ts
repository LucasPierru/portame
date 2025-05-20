import { z } from "zod";

// Experience
export const experienceSchema = z.object({
  company: z.string().min(1, "Company is required"),
  title: z.string().min(1, "Title is required"),
  location: z.string().optional(),
  tasks: z.array(z.object({value: z.string()})).min(1, "At least one task is required"),
  start_date: z.string().min(1),
  end_date: z.string().optional(),
  is_current: z.boolean().optional(),
});

// Project
export const projectSchema = z.object({
  title: z.string().min(1),
  tasks: z.array(z.object({value: z.string()})).min(1, "At least one task is required"),
  technologies: z.array(z.object({value: z.string()})).optional(),
  link: z.string().url().optional(),
  repo: z.string().url().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

// Skill
export const skillSchema = z.object({
  name: z.string().min(1),
  level: z.enum(["Beginner", "Intermediate", "Expert"]),
  category: z.string().optional(),
});

// Education
export const educationSchema = z.object({
  school: z.string().min(1),
  degree: z.string().min(1),
  field: z.string().optional(),
  location: z.string().optional(),
  start_date: z.string().min(1),
  end_date: z.string().optional(),
  is_current: z.boolean().optional(),
  gpa: z.string().optional(),
});
