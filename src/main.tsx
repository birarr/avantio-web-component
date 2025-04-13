import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/web-components/form-component.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>{/* <App /> */}</StrictMode>
);
