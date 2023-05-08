import React,{useState}from 'react';
import images from '../../constant/images';

const Login =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("/user/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Successfull");
          window.location.href = '/userDashboard';
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
        }else{
            alert("Loging Unsuccessfull !")
        }
      });
  };

    return(
        <div className='container-l'>
            {/**header */}
            {/* <header>
                <img src={images.Logo} alt='logo' className='logo-a'/>
                <a href='/' className='btn-l' style={{backgroundColor:'#024731',color:'white'}}>Sign Up</a>
                <a href='/' className='btn-l'>Return policy</a>
                <a href='/' className='btn-l'>About us</a>
                <a href='/' className='btn-l' >Contact us</a> 
            </header> */}
               <div className='lgnBox'>
                 <img src={images.Login1} alt='login' className='login-a'/>
                   <div className='lgnData'>
                     
                       <h3 className='lgnhd'>Login</h3><br/>

                       <h5 className='mail'>Email Address</h5>
                       <form onSubmit={handleSubmit}>
                       <input type='text' 
                       placeholder='Enter Your Email Address'
                       className='in'
                       value={email} onChange={(e) => setEmail(e.target.value)}
                       /><br/>
                       <h5 className='mail'>Password</h5>
                       <input 
                        type='text' 
                        placeholder='Enter Your Password' 
                        className='in'
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                       <button type='submit' className='btnSign'>Sign In</button><br/>
                       </form>
    
                       <h6 className='do'>Doesn't have an account yet?</h6>
                       <a href='/signin'><h6 className='link'>Sign up</h6></a>
                        
                   </div>   
               </div>

            {/**footer */}
            {/* <footer className='footer-a'>
                <img src={images.Bin} alt='bin' className='bin-a'/>
                <h4 className='footer1'>Copyright 2023 by Referenes Data. All Rights Reserved.</h4>
            </footer> */}
           
        </div>
    )
};
export default Login;