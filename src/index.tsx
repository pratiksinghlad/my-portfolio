import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./i18n/i18n";

// Obfuscate Cloudflare Web Analytics token using base64 encoding
if (import.meta.env.PROD) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute(
    "data-cf-beacon",
    JSON.stringify({ token: import.meta.env.VITE_CLOUDFLARE_TOKEN }),
  );
  document.head.appendChild(script);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
