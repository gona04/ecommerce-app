import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import "./index.scss";
import App from "./App.jsx";
import { UserProvider } from "./context/user.context.jsx";
import CartProvider from "./context/cart.context.jsx";
import CategoryProvider from "./context/category.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter >
      <UserProvider> 
        <CategoryProvider>
          <CartProvider>
            <App/>
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
      </BrowserRouter>
  </StrictMode>
);
