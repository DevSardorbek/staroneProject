import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Loading from "../loading/Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProductChart = () => {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}/products`
        );
        console.log("Fetched Data:", data);

        const labels = data.map((product) => product.title);
        const prices = data.map((product) => product.price);

        const chartData = {
          labels,
          datasets: [
            {
              label: "Product Prices",
              data: prices,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        console.log("Chart Data:", chartData);

        setChartData(chartData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "80%", margin: "100px auto" }}>
      {chartData ? <Bar data={chartData} /> : <Loading />}
    </div>
  );
};

export default ProductChart;
