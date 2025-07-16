import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.component";
import Navigation from "./pages/Navigation/navigation";
import Authentication from "./pages/Authentication/authentication.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";

function App() {
return (
  <Routes>
    <Route path={'/'} element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path={'authentication'} element={<Authentication/>}/>
    <Route path={'shop'} element={<Shop/>}/>
    <Route path={'checkout'} element={<Checkout/>}/>
    
    </Route>
  </Routes>
)
}

export default App;