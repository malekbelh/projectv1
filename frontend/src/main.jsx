import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ContextProvider } from "./context/ContextProvider";
import store from "./redux/store";
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      {" "}
      <Provider store ={store}>
              <RouterProvider router={router}  />

      </Provider>
    </ContextProvider>
  </React.StrictMode>
);
