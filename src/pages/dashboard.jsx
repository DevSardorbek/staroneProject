import React from "react";
import Products from "../components/products/products-list";
import { Chart } from "chart.js";
import ProductChart from "../components/chart/Chart";

export default function Dashboard() {
  return (
    <React.Fragment>
      <ProductChart />
      <Products />
    </React.Fragment>
  );
}
