import React from "react";

export default function Main({ children }) {
  return (
    <div className="main__wrapper">
      <main>{children}</main>
    </div>
  );
}
