import { Route, Routes } from "react-router-dom";
import Banner from "./Pages/Home/Banner";

import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";


function App() {
  return (
    <div data-theme="cupcake">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banner" element={<Banner />} />                
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
