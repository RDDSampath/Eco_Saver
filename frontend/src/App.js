import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';
import Home from './components/home/home';
import NDashboard from './components/Dashboard/Ndashboard';
import BDashboard from './components/Dashboard/Bdasboard';
import CreateRequest from "./components/Inorganic/CreateRequest";
import DisposalPlaces from "./components/Organic/DisposalPlaces";
import ViewRequest from "./components/Inorganic/ViewRequest";
//import EditRequest from "./components/Inorganic/EditRequest";
//<Route path="/h" element={<NDashboard/>}/>

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/a" element={<NDashboard/>}/>
        <Route path="/b" element={<BDashboard/>}/>
        <Route path="/c" element={<CreateRequest/>}/>
        <Route path="/d" element={<DisposalPlaces/>}/>
        <Route path="/v" element={<ViewRequest/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
