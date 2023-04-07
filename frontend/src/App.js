import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/home/header';
import Footer from './components/home/footer';
import Home from './components/home/home';
import Login from "./components/Login/Login";
import MyResource  from "./components/MyResources/MyResource";
import MyResourseForm  from "./components/MyResourseForm/MyResourseForm";
import ViewMyResource from "./components/ViewMyResources/ViewMyResources"
import SignUp from "./components/Signup/SignUp"
function App() {
  return (
    <BrowserRouter> <center> <Header/> 

      <Routes>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/myResource" element={<MyResource/>}/>
          <Route path="/myResourceform" element={<MyResourseForm/>}/>
          <Route path="/ViewMyResources" element={<ViewMyResource/>}/>
          <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
      </center>
    </BrowserRouter>
  );
}

export default App;
