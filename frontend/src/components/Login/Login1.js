import React, {useEffect} from 'react'
 
 const Login1 = () => {
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
            console.log(data, "userRegister");
          });
      }, []);

   return (
     <div> xxx</div>
   )
 }
 export default Login1;

 
 