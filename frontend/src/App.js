import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


//****========== Login ==============****//
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignIn";
import UserDetails from "./components/Login/userDetails";
import Home from "./components/home/home";

//****============My Resourses================****//
import MyResources from "./components/MyResources/MyResources";
import MyResourcesForm from "./components/MyResources/MyResourseForms";
import ViewMyResources from "./components/MyResources/ViewMyResources";
import UpdateMyResources from "./components/MyResources/MyResourseFormsUpdate";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  console.log("isLoggedIn ==>", isLoggedIn);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Home />}
          />
          {/* Login & Register */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />


          {/* My Resources */}
          <Route path="/myResources" element={<MyResources />} />
          <Route path="/myResourcesForm" element={<MyResourcesForm />} />
          <Route path="/viewMyResources" element={<ViewMyResources />} />
          <Route path="/updateMyResources/:data" element={<UpdateMyResources />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
