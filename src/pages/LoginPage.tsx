import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/stores/UseAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "@/schemas/login";
import { axiosInstance } from "@/lib/axios";
import { Link, useNavigate } from "react-router";

function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login } = useAuth();

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const handleLogin = async (values: LoginSchema) => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstance.post("/users/login", {
        login: values.email,
        password: values.password,
      });

      login({
        name: data.name,
        email: data.email,
        objectId: data.objectId,
        token: data["user-token"],
      });

      alert("Login Success");

      navigate("/blog");
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="bg-[#131B2E]">
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
                Welcome Back
              </div>
              <div className="text-[#434655] text-[13px]">
                Sign in to manage and publish VeloCore articles.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Label className="text-[#131B2E] text-[13px] font-semibold">
                  Email Address
                </Label>
                <div className="">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <Input
                    type="text"
                    {...register("email")}
                    className="text-[#131B2E] text-[15px]"
                  />
                  <div className="h-5">
                    {formState.errors.email && (
                      <p className="text-red-500 text-[12px] mt-1">
                        {formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <Label className="text-[#131B2E] text-[13px] font-semibold">
                  Password
                </Label>
                <div className="">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <Input
                    type="password"
                    {...register("password")}
                    className="text-[#131B2E]"
                  />
                  <div className="h-5">
                    {formState.errors.password && (
                      <p className="text-red-500 text-[12px] mt-1">
                        {formState.errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <FieldGroup className="w-45">
                  <Field orientation="horizontal">
                    <Checkbox
                      id="terms-checkbox-basic"
                      name="terms-checkbox-basic"
                      className="shadow-sm/30"
                    />
                    <FieldLabel
                      htmlFor="terms-checkbox-basic"
                      className="text-[#434655] text-[13px]"
                    >
                      Remember this device
                    </FieldLabel>
                  </Field>
                </FieldGroup>
                <div className="text-[#004AC6] text-[13px]">
                  Forgot Password?
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="md:mt-auto flex bg-[#004AC6] px-4 py-3 justify-center gap-2 rounded-sm mt-2 hover:text-white hover:bg-blue-400"
                disabled={isLoading}
              >
                <div className="text-[15px] text-white font-semibold">
                  {isLoading ? "Loading.." : "Login to VeloCore"}
                </div>
                {!isLoading && (
                  <img src="IconRightArrow.svg" alt="IconRightArrow" />
                )}
              </Button>

              <div className="flex justify-center items-center">
                Don't have an account? 
                <Link to="/register" className="ml-1 text-[#004AC6]"> Register </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
