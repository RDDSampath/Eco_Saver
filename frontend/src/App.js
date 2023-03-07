import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/home/header';
import Footer from './components/home/footer';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter> <center>
    <Header />
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/footer" element={<></>}/>
      </Routes>
      <Footer />
      </center>
    </BrowserRouter>
  );
}

export default App;
