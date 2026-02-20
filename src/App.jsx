import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Part1 from "./part1";
import About from "./about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning/part1" element={<Part1 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
