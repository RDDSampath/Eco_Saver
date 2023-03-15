import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';
import Home from './components/home/home';
import NDashboard from './components/Dashboard/Ndashboard';

//<Route path="/h" element={<NDashboard/>}/>

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<NDashboard/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
