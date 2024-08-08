import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../sass/__addProduct.scss";

let initialState = {
  title: "",
  price: "",
  description: "",
  image: "",
  category: "",
};

export default function AddProduct() {
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3500/product`,
        product
      );
      setProduct(initialState);
      console.log("Product added:", response.data);
      toast.success("success");
    } catch (error) {
      toast.error("error");
      console.error(
        "Error adding product:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="addProduct__wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
