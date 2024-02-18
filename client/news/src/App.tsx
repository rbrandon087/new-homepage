import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/Home.css";
import "./styles/Navbar.css";
import shapes from "./images/shapes.jpg";

export interface IAppProps {}

function App() {
  return (
    <Router>
      <Navbar name={""} />
      <Routes>
        <Route
          path="/"
          element={<Home name={""} paragraph={""} imgSrc={""} imgAlt={""} />}
        />
        <Route path="/New" element={<New name={""} />} />
        <Route path="/Popular" element={<Popular name={""} />} />
        <Route path="/Trending" element={<Trending name={""} />} />
        <Route path="/Categories" element={<Categories name={""} />} />
      </Routes>
    </Router>
  );
}

export default App;
