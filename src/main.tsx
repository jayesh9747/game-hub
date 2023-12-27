import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ChakraProvider,
  ColorModeProvider,
  ColorModeScript,
  extendTheme,
} from "@chakra-ui/react";
import "./index.css";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
