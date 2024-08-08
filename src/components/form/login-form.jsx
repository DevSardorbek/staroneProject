import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router";
import { useAuth } from "../providers/auth-provider";
import "../../sass/__loginForm.scss";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const submitHandle = async (value) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/auth/login`,
        value
      );
      if (response?.data?.token) {
        const token = response?.data?.token;
        window.localStorage.setItem("auth-token", token);
        setAuth(token);
        navigate("/");
        toast.success("welcome");
      }
    } catch (err) {
      console.log(err);
      toast.error("username or password  is incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginForm__wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submitHandle)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: "To'ldirish majburiy!" })}
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => <p>{message}</p>}
        />

        <input
          type="password"
          placeholder="password"
          {...register("password", { required: "To'ldirish majburiy!" })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p>{message}</p>}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
