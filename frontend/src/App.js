import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from './components/home/header';
import Footer from './components/home/footer';
import Home from './components/home/home';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  console.log("isLoggedIn ==>", isLoggedIn);
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
