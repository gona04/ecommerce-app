import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.component";
import Navigation from "./pages/Navigation/navigation";

function App() {
return (
  <Routes>
    <Route path={'/'} element={<Navigation/>}>
    <Route index element={<Home/>}/>
    </Route>
  </Routes>
)
}

export default App;