import "@fontsource/dm-sans";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from "react-hot-toast";

import { QueryClientProvider } from "@tanstack/react-query";

import './index.css';
import App from './App.jsx';
import queryClient from "./lib/queryClient";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>  
      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </QueryClientProvider>
  </StrictMode>,
);

