import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Getting screens
import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "",
    element: <Welcome />,
  },
  {
    path: "/authentication",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
