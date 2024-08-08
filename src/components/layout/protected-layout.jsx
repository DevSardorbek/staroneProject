import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/auth-provider";
import Sidebar from "../ui/sidebar";
import Main from "../ui/main";

export default function ProtectedLayout() {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    <React.Fragment>
      {auth ? (
        <div className="main__section">
          <Sidebar />
          <Main>
            <Outlet />
          </Main>
        </div>
      ) : (
        <Navigate replace to={"/login"} state={{ from: location }} />
      )}
    </React.Fragment>
  );
}
