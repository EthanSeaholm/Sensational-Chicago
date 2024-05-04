import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import LinksPage from "./components/LinksPage";
import Gallery from "./components/Gallery";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EnterPage from "./components/EnterPage";

/**
 * This React Application is routed via React Router.
 * The main routes include the Enter page, Homepage, Links page, and Gallery page.
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <EnterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/links",
    element: <LinksPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
    errorElement: <ErrorPage />,
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
