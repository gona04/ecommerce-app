import "./App.scss";

function Cart() {
  return (
    <h1>This is cart</h1>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
