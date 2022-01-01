import React from "react";
import { LineChart, XAxis, Tooltip, Line, CartesianGrid } from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      name: "Saturday",
      purchase: 6000,
      sell: 2400,
    },
    {
      name: "Sunday",
      purchase: 6000,
      sell: 5398,
    },
    {
      name: "Monday",
      purchase: 2000,
      sell: 9800,
    },
    {
      name: "Tuesday",
      purchase: 5780,
      sell: 3908,
    },
    {
      name: "Wednesday",
      purchase: 1890,
      sell: 4800,
    },
    {
      name: "Thusday",
      purchase: 6590,
      sell: 3800,
    },
    {
      name: "Friday",
      purchase: 5490,
      sell: 2300,
    },
  ];
  return (
    <div className="container dashboard px-5">
      <div className="box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>3</div>
      </div>
      <div className="chart">
        <h2 className="display-6 text-primary">Stock</h2>
        <div>
          <LineChart
            width={900}
            height={250}
            data={data}
            margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />

            <Line type="monotone" dataKey="purchase" stroke="#8884d8" />
            <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
