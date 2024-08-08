import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductForm from "../components/form/product-form";
import axios from "axios";
import "../sass/__editForm.scss";
export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getSingleProduct = async (id) => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/products/${id}`
        );
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleProduct(id);
  }, []);

  return (
    <div className="edit__form">
      {product.title && <ProductForm value={product} />}
    </div>
  );
}
