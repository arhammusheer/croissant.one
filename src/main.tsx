import { ChakraProvider, LightMode } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Analytics />
    </ChakraProvider>
  </React.StrictMode>
);
