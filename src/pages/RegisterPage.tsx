import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterSchema } from "@/schemas/register";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, handleSubmit, formState } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const handleCreate = async (values: RegisterSchema) => {
    setIsLoading(true);
    try {
      await axiosInstance.post("/users/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      alert("Register Success");
    } catch (error) {
      console.log(error);
      alert("Register Failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)} className="bg-[#131B2E]">
      <div className="min-h-screen mx-auto flex items-center px-6 py-12 bg-[#131B2E]">
        <div className="bg-white max-w-125 mx-auto p-6 rounded-sm min-h-135">
          <div className="flex flex-col pb-6 items-center">
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
            <div className="pt-4 text-[#131B2E] text-[28px] font-bold">
              Create your account
            </div>
            <div className="text-[#434655] text-[13px]">
              Join VeloCore and start tracking your performance
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Label className="text-[#131B2E] text-[13px] font-semibold">
                Name
              </Label>
              <Input
                type="text"
                {...register("name")}
                className="text-[#131B2E] bg-[#F2F3FF] text-[15px] h-10"
              />
              {formState.errors.name && (
                <p className="text-red-500 text-[12px] mt-1">
                  {formState.errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label className="text-[#131B2E] text-[13px] font-semibold">
                Email Address
              </Label>
              <div className="">
                <Input
                  {...register("email")}
                  type="text"
                  className="text-[#131B2E] bg-[#F2F3FF] text-[15px] h-10"
                />
                {formState.errors.email && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Label className="text-[#131B2E] text-[13px] font-semibold">
                Password
              </Label>
              <Input
                {...register("password")}
                type="password"
                className="text-[#131B2E] bg-[#F2F3FF] text-[15px] h-10"
              />
              {formState.errors.password && (
                <p className="text-red-500 text-[12px] mt-1">
                  {formState.errors.password.message}
                </p>
              )}
            </div>
            <Button
              size="lg"
              type="submit"
              className="md:mt-auto flex bg-[#004AC6] px-4 py-3 justify-center gap-2 rounded-sm mt-2 hover:text-white hover:bg-blue-400"
              disabled={isLoading}
            >
              <div className="text-[15px] text-white font-semibold">
                {isLoading ? "Loading.." : "Create Account"}
              </div>
              {!isLoading && (
                <img src="IconRightArrow.svg" alt="IconRightArrow" />
              )}
            </Button>

            <div className="flex justify-center items-center">
              Already have an account?
              <Link to="/Login" className="ml-1 text-[#004AC6]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterPage;
