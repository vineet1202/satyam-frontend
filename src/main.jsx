import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
