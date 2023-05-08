import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer2';
import Home from './components/home/home';
import NDashboard from './components/Dashboard/Ndashboard';
import BDashboard from './components/Dashboard/Bdasboard';
import CreateRequest from "./components/Inorganic/CreateRequest";
import DisposalPlaces from "./components/Organic/DisposalPlaces";
import ViewRequest from "./components/Inorganic/ViewRequest";
import OrganicPlaces from "./components/Organic/OrganicPlaces";
import PostDisposal from "./components/Organic/PostDisposal";
import ODashboard from "./components/Dashboard/ODashboard";
import UpdateDisposal from "./components/Organic/UpdateDisposal";
import DetailDisposal from "./components/Organic/DetailDisposal";
import RecycleProduct from "./components/Products/RecycleProduct";
import Login from "./components/Login/Login";
import SignAB from "./components/Login/SignIn";
import Headers from "./components/home/HeaderS";
// import Login1 from "./components/Login/login1";
import MyResources from "./components/MyResources/MyResources";
import MyResourseForms from "./components/MyResources/MyResourseForms";
import ViewMyResources from "./components/MyResources/ViewMyResources";

const App = () => {

  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  console.log("USER DATA ==>",userData);

  useEffect(() => {
    fetch("/user/data", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        if (data.data.userType == "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  }, []);

  return (
    <div>
    {admin == true ? (
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/BuserDashboard" element={<NDashboard/>}/>
        <Route path="/userDashboard" element={<BDashboard/>}/>
        <Route path="/c" element={<CreateRequest/>}/>
        <Route path="/d" element={<DisposalPlaces/>}/>
        <Route path="/v" element={<ViewRequest/>}/>
        <Route path="/o" element={<OrganicPlaces/>}/>
        <Route path="/p" element={<PostDisposal/>}/>
        <Route path="/od" element={<ODashboard/>}/>
        <Route path="/ud" element={<UpdateDisposal/>}/>
        <Route path="/dd" element={<DetailDisposal/>}/>
        <Route path="/rr" element={<RecycleProduct/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignAB/>}/>
        <Route path="/mr" element={<MyResources/>}/>
        <Route path="/mrf" element={<MyResourseForms/>}/>
        <Route path="/vmr" element={<ViewMyResources/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>):(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/d" element={<DisposalPlaces/>}/>
      <Route path="/v" element={<ViewRequest/>}/>
      <Route path="/o" element={<OrganicPlaces/>}/>
      <Route path="/p" element={<PostDisposal/>}/>
      <Route path="/ud" element={<UpdateDisposal/>}/>
      <Route path="/dd" element={<DetailDisposal/>}/>
      <Route path="/rr" element={<RecycleProduct/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<SignAB/>}/>
      {/* <Route path="/mr" element={<MyResource/>}/>
      <Route path="/mrf" element={<MyResourseForm/>}/>
      <Route path="/vmr" element={<ViewMyResources/>}/> */}
    </Routes>
    <Footer />
  </BrowserRouter>
  )}
  </div>
  );
}

export default App;
