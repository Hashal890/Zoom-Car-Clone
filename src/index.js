import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider>
      <AuthContext>
        <App />
      </AuthContext>
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
