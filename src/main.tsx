import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Users from "./routes/Users";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <Users />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
