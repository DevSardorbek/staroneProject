import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../action/logout";
import { useAuth } from "../providers/auth-provider";
import "../../sass/__sidebar.scss";
import { CiLogout } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAddCard } from "react-icons/md";

export default function Sidebar() {
  const { setAuth } = useAuth();
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={"/"}>
            <LuLayoutDashboard />
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link to={"/add-product"}>
            <MdAddCard />
            <p>Add-Products</p>
          </Link>
        </li>
        <li>
          <button onClick={() => logOut(setAuth)}>
            <CiLogout />
            <p>Log Out</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
