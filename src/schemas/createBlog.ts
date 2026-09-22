import * as z from "zod";

export const createBlogSchema = z.object({
  author: z.string().min(5, "Title must be at least 5 characters."),
  category: z.string().min(1, "Category is required"),
  content: z.string().min(20, "Content must be at least 20 characters."),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters."),
  publishDate: z.string().min(1, "Publish Date is required"),
  thumbnail: z.instanceof(File, { message: "Thumbnail must be afile" }),
  title: z.string().min(4, "Description must be at least 4 characters."),
});

export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
