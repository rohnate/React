import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./home";
import Part1 from "./part1";
import About from "./about";
import Nopage from "./noPage";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {" "}
            {/* This is the parent route which contains all the children route which starts with "/" */}
            <Route path="/home" element={<Home />} />
            <Route path="/learning/part1" element={<Part1 />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<Nopage />} />{" "}
          {/* This "*" will catch all the routes other then defined one's to show the Nopage component */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "90vh" }}>
        <Outlet />{" "}
        {/* With the Outlet function which react dom provides Layout components will render its children routes. */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
