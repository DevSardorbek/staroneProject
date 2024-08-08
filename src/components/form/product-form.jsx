import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function ProductForm({ value }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: value });
  const [img, setImg] = useState(null);

  const submitHandle = async (value) => {
    const data = new FormData();
    data.append("title", value.title);
    data.append("image", img);
    if (value?.id) {
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_APP_API_BASE_URL}/products/${value?.id}`,
          data
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_API_BASE_URL}/products`,
          data
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="form__data">
      <form onSubmit={handleSubmit(submitHandle)}>
        <input
          type="text"
          {...register("title", { required: "To'ldirish majburiy!" })}
        />
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => <p>{message}</p>}
        />

        <input
          type="text"
          {...register("price", { required: "To'ldirish majburiy!" })}
        />
        <ErrorMessage
          errors={errors}
          name="price"
          render={({ message }) => <p>{message}</p>}
        />

        <input
          type="text"
          {...register("description", { required: "To'ldirish majburiy!" })}
        />
        <ErrorMessage
          errors={errors}
          name="description"
          render={({ message }) => <p>{message}</p>}
        />

        <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        <img src={img || value.image} alt="" />

        <input
          type="text"
          {...register("category", { required: "To'ldirish majburiy!" })}
        />
        <ErrorMessage
          errors={errors}
          name="category"
          render={({ message }) => <p>{message}</p>}
        />

        <button type="submit">{!value?.id ? "Add" : "Update"}</button>
      </form>
    </div>
  );
}
