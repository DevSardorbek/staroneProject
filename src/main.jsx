import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import "../src/sass/style.scss";
import AuthProvider from "./components/providers/auth-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routing />
    </AuthProvider>
  </React.StrictMode>
);
