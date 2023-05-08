import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/about";
import MainLayout from "./layout/MainLayout";

function App() {
  return (

    <Routes>     
        <Route path="" element={<MainLayout />} >
          <Route index element={<Home/>} />

          
        </Route>

        <Route path="/about" element={<About />} />
    </Routes>

  );
}

export default App;