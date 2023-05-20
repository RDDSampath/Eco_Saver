import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//****============ Dashboard ================****//
import UserDashboard from './components/Dashboard/Bdasboard';
import BUserDashboard from "./components/Dashboard/Ndashboard";
import OrganicDashboard from "./components/Dashboard/ODashboard";

//****============ Utilities ================****//
// import SideNav from "./components/Utilities/SideNav";
// import SideNavC from "./components/Utilities/SideNavC";
// import SideNavB from "./components/Utilities/SideNavB";

//****========== Login ==============****//
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignIn";
import UserDetails from "./components/Login/userDetails";
import Home from "./components/home/home";

//****============Inorganic================****//
import CreateRecipe from "./components/Inorganic/CreateRequest";
import ViewRequeest from "./components/Inorganic/ViewRequest";

//****============Organic================****//
import DetailDisposal from "./components/Organic/DetailDisposal";
import DisposalPlace from "./components/Organic/DisposalPlaces";
import OrganicPlaces from "./components/Organic/DisposalPlaces";

//****============My Resourses================****//
import MyResources from "./components/MyResources/MyResources";
import MyResourcesForm from "./components/MyResources/MyResourseForms";
import ViewMyResources from "./components/MyResources/ViewMyResources";

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
          
          {/* Organic */}
          <Route path="/organic" element={<OrganicDashboard />} />
          <Route path="/organic/disposal" element={<DetailDisposal />} />
          <Route path="/organic/disposalPlaces" element={<DisposalPlace />} />
          <Route path="/organic/postDisposal" element={<PostDisposal />} />
          <Route path="/organic/updateDisposal" element={<UpdateDisposal />} />
          <Route path="/organic/organicPlaces" element={<OrganicPlaces />} />

          {/* Inorganic */}
          <Route path="/inorganic" element={<UserDashboard />} />
          <Route path="/inorganicB" element={<BUserDashboard />} />
          <Route path="/inorganic/createRequest" element={<CreateRecipe />} />
          <Route path="/inorganic/viewRequest" element={<ViewRequeest />} />

          {/* My Resources */}
          <Route path="/myResources" element={<MyResources />} />
          <Route path="/myResourcesForm" element={<MyResourcesForm />} />
          <Route path="/viewMyResources" element={<ViewMyResources />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
