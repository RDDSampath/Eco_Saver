import React, { Component, useEffect, useState } from "react";
import AdminHome from "../Admin/adminHome";

import UserHome from "../home/HomeS";

export default function UserDetails() {
  const [userData, setUserData] = useState('');
  const [admin, setAdmin] = useState(false);
  

  useEffect(() => {
    fetch("/userData", {
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
          window.location.href = "/";
        } else {
          // Store userData in local storage
          localStorage.setItem('userData', JSON.stringify(data.data));
        }
      });
  }, []);
  console.log(userData, "userData");
  return admin ? <AdminHome /> : <UserHome userData={userData} />;
}
