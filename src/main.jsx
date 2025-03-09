import { createRoot } from "react-dom/client";
import App from "./Components/App/App";
import "./Style.module.scss";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

