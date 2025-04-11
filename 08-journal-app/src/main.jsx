import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { JournapApp } from "./JournapApp.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JournapApp />
  </StrictMode>
);
