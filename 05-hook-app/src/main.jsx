import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HookApp } from './HookApp.jsx'
import "./index.css";
// import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
    {/* <HookApp /> */}
  </StrictMode>
);
