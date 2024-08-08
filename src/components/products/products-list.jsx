import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/__productList.scss";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/products`
        );
        setProducts([...data]);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_API_BASE_URL}/products/${id}`
      );
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="productList__wrapper">
      <ul>
        {products.map((item, index) => (
          <li key={item?.title + item?.id}>
            <span>{index + 1}</span>
            <span>
              <img
                style={{ width: "30px" }}
                src={item.image}
                alt={item.title}
              />
            </span>
            <span>{item.title}</span>
            <span>$ {item.price}</span>
            <div>
              <span>
                <Link to={`/edit-product/${item.id}`}>
                  <RiEdit2Line />
                </Link>
              </span>
              <span>
                <button onClick={() => handleDelete(item.id)}>
                  <RiDeleteBin5Line />
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
