import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createBlogSchema, type CreateBlogSchema } from "@/schemas/createBlog";
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { ResponeFileService } from "@/types/backendless";

function CreateBlogPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const form = useForm<CreateBlogSchema>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      author: "",
      category: "",
      content: "",
      excerpt: "",
      publishDate: "",
      thumbnail: undefined,
      title: "",
    },
  });

  async function onSubmit(data: CreateBlogSchema) {
    try {
      setIsLoading(true);
      // step 1: upload gambar thumbnail ke file services
      const formData = new FormData();
      formData.append("file", data.thumbnail);
      const fileName = Date.now() + Math.floor(Math.random() * 1000);
      const folderName = "images";

      const response = await axiosInstance.post<ResponeFileService>(
        `/files/${folderName}/${fileName}`,
        formData,
      );

      // step 2: submit data (yang berupa tulisan) ke backendless
      await axiosInstance.post("/data/Blogs", {
        title: data.title,
        category: data.category,
        content: data.content,
        excerpt: data.excerpt,
        publishDate: data.publishDate,
        thumbnail: response.data.fileURL,
        author: data.author,
      });

      alert("Create blog success");
      navigate("/blog");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-[#131B2E]">
      <div className="min-h-screen mx-auto flex items-center px-6 py-12 bg-[#131B2E]">
        <Card className="bg-white w-full max-w-3xl mx-auto py-6 px-2 rounded-sm min-h-170">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 mb-3">
              <img src="LogoOnly.png" alt="LogoOnly" />
            </div>
            <div className="flex gap-0.5 items-baseline">
              <div className="text-[20px] text-[#131B2E] font-semibold">
                VeloCore
              </div>
              <div className="px-1 py-0.5 bg-[#E2E7FF] text-[#004AC6] text-[12px] rounded-sm font-semibold">
                OS v4.2
              </div>
            </div>
            <div className="text-[#00687A] text-[11px] ">
              JAKARTA BIOTECH LABS
            </div>
          </div>
          <CardHeader>
            <CardTitle className=" text-[#131B2E] text-[28px] font-bold">
              Create Blog
            </CardTitle>
            <CardDescription className="text-[#434655] text-[13px]">
              Share valuable insights, training tips, and sports technology
              updates with the VeloCore community.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="form-create-blog" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-title">Title</FieldLabel>
                      <Input
                        {...field}
                        id="form-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your Title"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="excerpt"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-excerpt">Excerpt</FieldLabel>
                      <Textarea
                        {...field}
                        id="form-excerpt"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your Excerpt"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="category"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-category">Category</FieldLabel>
                      <Input
                        {...field}
                        id="form-category"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your Category"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="author"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-author">Author</FieldLabel>
                      <Input
                        {...field}
                        id="form-author"
                        aria-invalid={fieldState.invalid}
                        placeholder="Author name"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="content"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-content">Content</FieldLabel>
                      <Textarea
                        {...field}
                        id="form-content"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your Content"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="thumbnail"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-thumbnail">
                        Thumbnail
                      </FieldLabel>
                      <Input
                        type="file"
                        id="form-thumbnail"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your Thumbnail"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="publishDate"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-publishDate">
                        Publish Date
                      </FieldLabel>
                      <Input
                        {...field}
                        type="date"
                        id="form-publishDate"
                        aria-invalid={fieldState.invalid}
                        placeholder="Publish Date"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button
                type="submit"
                form="form-create-blog"
                disabled={isLoading}
                className="bg-[#2563EB] text-white hover:text-white hover:bg-blue-400"
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default CreateBlogPage;
