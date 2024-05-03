import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import LinksPage from "./components/LinksPage";
import Gallery from "./components/Gallery";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**
 * This React Application is routed via React Router.
 * The main routes include the Homepage, Links page, and Gallery page.
 */

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

/**
 * Entry point for the React application, bootstraps and renders the root component.
 * StrictMode is used to catch potential erorrs during development. It will not be present in production.
 */

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
