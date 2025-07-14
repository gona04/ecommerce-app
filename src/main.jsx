import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext/user.context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <BrowserRouter>
      <UserProvider children={<App/>}/>
    </BrowserRouter>
  // </StrictMode>
);
