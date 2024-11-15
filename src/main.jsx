// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const RootComponent = () => {
  const { themeMode } = useTheme();

  return (
    <Theme appearance={themeMode}>
      <App />
    </Theme>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <RootComponent />
  </ThemeProvider>
);
