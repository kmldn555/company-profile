import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, {
    error: "Name is required",
  }),

  email: z.email({
    error: "Invalid email address",
  }),

  password: z
    .string()
    .min(6, {
      error: "Password must be at least 6 characters",
    })
    .regex(/[A-Z]/, {
      error: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      error: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      error: "Password must contain at least one number",
    })
    .regex(/[^A-Za-z0-9]/, {
      error: "Password must contain at least one special character",
    }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;