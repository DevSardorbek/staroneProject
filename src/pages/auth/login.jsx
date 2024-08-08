import React from "react";
import LoginForm from "../../components/form/login-form";
import { useAuth } from "../../components/providers/auth-provider";

export default function Login() {
  return (
    <div className="login__wrapper">
      <LoginForm />
    </div>
  );
}
