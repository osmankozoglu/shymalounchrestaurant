import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import MainPage from "MainPage.js";
import "../src/styles/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Subelerimiz from "Subelerimiz";
import Menu from "Menu";
import Hakkimizda from "Hakkimizda";
import Iletisim from "Iletisim";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subelerimiz" element={<Subelerimiz/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/hakkimizda" element={<Hakkimizda/>} />
          <Route path="/iletisim" element={<Iletisim/>} />
        </Routes>
      </Router>
    </>
  );
}
