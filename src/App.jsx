import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

function Cart() {
  return (
    <h1>Card is here</h1>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;