import { useAuth } from "@/stores/UseAuth";
import { redirect } from "react-router";

export const authLoader = () => {
  const { user } = useAuth.getState();

  if (!user) {
    return redirect("/login");
  }

  return {};
};
