import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext/user.context.jsx";
import { ProductContextProvider } from "./context/productContext/product.context.jsx";
import { CartProvider } from "./context/cartContext/cart.context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <UserProvider>
      <ProductContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductContextProvider>
    </UserProvider>
  </BrowserRouter>
  // </StrictMode>
);
