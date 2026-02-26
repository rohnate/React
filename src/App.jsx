import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./home";
import Part1 from "./part1";
import About from "./about";
import Nopage from "./noPage";
import Header from "./header";
import Footer from "./footer";
import Useref from "./useRef";
import Timer from "./timer";
import LightBulb from "./rollingUpState-unoptimalRerenders/LightBulb";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* path tells React Router: “If the browser URL matches this value, render this component.” */}{" "}
            {/* This is the parent route which contains all the children route which starts with "/" */}
            <Route path="/home" element={<Home />} />
            <Route path="/learning/part1" element={<Part1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/useRef" element={<Useref/>}/>
            <Route path="/timer" element={<Timer/>}/>
            <Route path="/lightBulb" element={<LightBulb/>}/>
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
        {/* With the Outlet function which react dom provides, parent route will render its children routes inside the Layout component. <Outlet /> is where child routes appear. */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
