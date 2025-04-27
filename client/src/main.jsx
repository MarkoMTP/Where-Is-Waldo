import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./components/Routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
