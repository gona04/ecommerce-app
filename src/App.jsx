import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

function Cart() {
  return (
    <h1>This is cart</h1>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="cart" element={<Cart />}/>
      </Route>
    </Routes>
  );
}

export default App;
