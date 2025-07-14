import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.component";
import Navigation from "./pages/Navigation/navigation";
import Authentication from "./pages/Authentication/authentication.component";

function App() {
return (
  <Routes>
    <Route path={'/'} element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path={'authentication'} element={<Authentication/>}/>
    </Route>
  </Routes>
)
}

export default App;