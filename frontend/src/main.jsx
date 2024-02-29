import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ContextProvider } from "./context/ContextProvider";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./redux/store";
=======
import store from "./redux/store";
import { Provider } from 'react-redux'
>>>>>>> ce129374756e052c3cfba832a02aa01e2f945cbf

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      {" "}
<<<<<<< HEAD
      <Provider store={store}>
        <RouterProvider router={router} />
=======
      <Provider store ={store}>
              <RouterProvider router={router}  />

>>>>>>> ce129374756e052c3cfba832a02aa01e2f945cbf
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);
