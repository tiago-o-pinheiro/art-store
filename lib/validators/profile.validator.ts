import z from "zod";

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  email: z.email("Invalid email address").optional(),
  image: z.url("Invalid image URL").optional(),
});
