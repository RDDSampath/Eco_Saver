import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';
import Home from './components/home/home';
import DisposalPlaces from "./components/Organic/DisposalPlaces";
import OrganicPlaces from "./components/Organic/OrganicPlaces";
import PostDisposal from "./components/Organic/PostDisposal";
import ODashboard from "./components/Dashboard/ODashboard";
import UpdateDisposal from "./components/Organic/UpdateDisposal";
import DetailDisposal from "./components/Organic/DetailDisposal";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/d" element={<DisposalPlaces/>}/>
        <Route path="/o" element={<OrganicPlaces/>}/>
        <Route path="/p" element={<PostDisposal/>}/>
        <Route path="/od" element={<ODashboard/>}/>
        <Route path="/ud" element={<UpdateDisposal/>}/>
        <Route path="/dd" element={<DetailDisposal/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
