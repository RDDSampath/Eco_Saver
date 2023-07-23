import React,{useState}from 'react';
import images from '../../constant/images';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Header from '../home/header';
import Footer from '../home/footer';


const Login =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [refresh, setRefresh] = useState(false);
    

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
          if (data.status == "ok") {
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'Welcome back!',
            }).then(() => {
              window.localStorage.setItem('token', data.data);
              window.localStorage.setItem('loggedIn', true);
              window.location.href = './userDetails';
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'Invalid credentials. Please try again.',
            });
          }
        });
  };

    return(
        <div className='container-l'>
            <div style={{backgroundColor:'black'}}>
            <Header/></div>
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
                       <a href='/sign-up'><h6 className='link'>Sign up</h6></a>
                        
                   </div>   
               </div>
            <Footer/>     
        </div>
    )
};
export default Login;