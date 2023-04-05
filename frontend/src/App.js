import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/home/header';
import Footer from './components/home/footer';


import OrganicPlaces from './components/Dashboard/OrganicPlaces';
import OrganicDash from './components/Dashboard/OrganicDash';


function App() {
  return (
    <BrowserRouter> 

    <Header />

      <Routes>

        
      <Route index element={<OrganicDash/>}/>  

      <Route index element={<OrganicPlaces/>}/>
      
      

      
          <Route path="/footer" element={<></>}/>

      </Routes>

      <Footer />
    
    </BrowserRouter>
  );
}

export default App;
