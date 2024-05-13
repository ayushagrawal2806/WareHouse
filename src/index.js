import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import WarehouseDetails from "./Component/Warehouse/WarehouseDetails";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Navbar from "./Component/Navbar/Navbar";
import Herosection from "./Component/Herosection/Herosection";
const root = ReactDOM.createRoot(document.getElementById("root"));
let routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/WarehouseDetail/:id", element: <WarehouseDetails /> },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
