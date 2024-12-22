import { ThemeProvider } from "@/components/theme-provider"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "@/components/ui/sonner";
import { Provider } from "react-redux";
import { store } from "./store/store";
import '@fontsource/outfit'; // Defaults to weight 400
import '@fontsource/outfit/500.css'; // Weight 500
import '@fontsource/outfit/700.css'; // Weight 700



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
