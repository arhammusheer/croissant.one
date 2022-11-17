import { ChakraProvider, LightMode } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";
import ReactGA from "react-ga";
import { ANALYTICS_MEASUREMENT_ID } from "./pages/analytics";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

ReactGA.initialize(ANALYTICS_MEASUREMENT_ID);
ReactGA.pageview(window.location.pathname + window.location.search);