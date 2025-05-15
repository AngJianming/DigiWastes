import React from "react";
import ReactDOM from "react-dom/client";
import "./AdminPages/index.css";
import AdminDashboard from "./AdminPages/AdminDashboard";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminDashboard />
    </BrowserRouter>
  </React.StrictMode>
);
