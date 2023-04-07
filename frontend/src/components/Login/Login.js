import React from 'react';
import './lgnStyles.css';
import images from '../../constant/images';

const Login =()=>{
    return(
        <div className='container-l'>
            {/**header */}
            <header>
                <img src={images.Logo} alt='logo' className='logo-a'/>
                <a href='/' className='btn-l' style={{backgroundColor:'#024731',color:'white'}}>Sign Up</a>
                <a href='/' className='btn-l'>Return policy</a>
                <a href='/' className='btn-l'>About us</a>
                <a href='/' className='btn-l' >Contact us</a> 
            </header>
               <div className='lgnBox'>
                 <img src={images.Login} alt='login' className='login-a'/>
                   <div className='lgnData'>
                     
                       <h3 className='lgnhd'>Login</h3><br/>

                       <h5 className='mail'>Email Address</h5>
                       <input type='text' placeholder='Enter Your Email Address'className='in'/><br/>
                       <h5 className='mail'>Password</h5>
                       <input type='text' placeholder='Enter Your Password' className='in'/><br/>
                       <button className='btnSign'>Sign In</button><br/>
    
                       <h6 className='do'>Doesn't have an account yet?</h6>
                       <h6 className='link'>Sign up</h6>
                        
                   </div>   
               </div>

            {/**footer */}
            <footer className='footer-a'>
                <img src={images.Bin} alt='bin' className='bin-a'/>
                <h4 className='footer1'>Copyright 2023 by Referenes Data. All Rights Reserved.</h4>
            </footer>
           
         
            
            

        </div>
    )
};
export default Login;