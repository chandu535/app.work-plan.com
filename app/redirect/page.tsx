"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import onSignInSuccessService from "@/services/auth/onSignInSuccessService";

const Redirect = () => {
  const searchParams = useSearchParams();

  const getUserDataAfterLoginSuccess = async () => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    try {
      const response = await onSignInSuccessService({
        code: code as string,
        state: state as string,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserDataAfterLoginSuccess();
  }, []);
  return (
    <div style={{ color: "green" }}>
      Login Success! Please wait while we are taking into our own page
    </div>
  );
};

export default Redirect;
