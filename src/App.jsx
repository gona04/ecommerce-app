import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.component";
import Navigation from "./pages/Navigation/navigation";
import SignIn from "./pages/sign-in/sign-in.component";

function App() {
return (
  <Routes>
    <Route path={'/'} element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path={'sign-in'} element={<SignIn/>}/>
    </Route>
  </Routes>
)
}

export default App;