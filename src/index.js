import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import LinksPage from "./components/LinksPage";
import Gallery from "./components/Gallery";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/links",
    element: <LinksPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
