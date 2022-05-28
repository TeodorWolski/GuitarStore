import React from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "./providers/AppProvider";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
