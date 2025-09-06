import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters!")
  .max(20, "Username must be no more than 20 characters!")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character!");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().regex(emailRegex, { message: "Invalid email address!" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters!" }),
});
