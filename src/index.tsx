import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

// Securely inject Cloudflare Web Analytics using environment variable
const cfToken = import.meta.env.VITE_CLOUDFLARE_TOKEN;
if (import.meta.env.PROD && cfToken) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: cfToken }));
  document.head.appendChild(script);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
