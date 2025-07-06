import React from "react";
import { Route, Routes } from "react-router-dom";
import home from "./pages/home";
import menu from "./pages/menu";
import reservations from "./pages/reservations";
import events from "./pages/events";
import blog from "./pages/blog";
import aboutus from "./pages/aboutus";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={home} />
        <Route path="/menu" element={menu} />
        <Route path="/reservation" element={reservations} />
        <Route path="/events" element={events} />
        <Route path="/blog" element={blog} />
        <Route path="/aboutus" element={aboutus} />
      </Routes>
    </>
  );
};

export default App;
