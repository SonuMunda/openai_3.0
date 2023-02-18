import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import ImageGenerarator from "./pages/ImageGenerarator";
import Header from "./assets/components/Header";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatgpt" element={<Assistant />} />
        <Route path="dalle" element={<ImageGenerarator />} />
      </Routes>
    </>
  );
};

export default App;
