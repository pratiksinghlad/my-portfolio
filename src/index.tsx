import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./i18n/i18n";

// Performance monitoring for development
if (import.meta.env.DEV) {
  // Add performance observer for development
  if ("PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "measure") {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
      });
    });
    observer.observe({ entryTypes: ["measure", "navigation"] });
  }
}

// Obfuscate Cloudflare Web Analytics token using base64 encoding
if (import.meta.env.PROD && import.meta.env.VITE_CLOUDFLARE_TOKEN) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute(
    "data-cf-beacon",
    JSON.stringify({ token: atob(import.meta.env.VITE_CLOUDFLARE_TOKEN) }),
  );
  document.head.appendChild(script);
}

// Optimize React rendering
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Enable concurrent features for better performance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
