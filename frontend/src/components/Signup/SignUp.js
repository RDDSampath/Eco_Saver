import React from 'react';
import './SignStyles.css';
import images from '../../constant/images';

const SignUp =()=>{
    return(
        <div className='container-c'>
            {/**header */}
            <header>
                <img src={images.Logo} alt='logo' className='logo-a'/>
                <a href='/' className='btn-l' style={{backgroundColor:'#024731',color:'white'}}>Sign In</a>
                <a href='/' className='btn-l'>Return policy</a>
                <a href='/' className='btn-l'>About us</a>
                <a href='/' className='btn-l' >Contact us</a> 
            </header>
              
            <div className='lgnBox'>
                 <img src={images.Login} alt='login' className='login-a'/>
                   <div className='lgnData-a'>
                     
                       <h3 className='lgnhd'>Sign Up</h3><br/>

                       <h5 className='mail'>User Name</h5>
                       <input type='text' placeholder='Enter Your User Name'className='in'/><br/>
                       <h5 className='mail'>E-mail</h5>
                       <input type='text' placeholder='E-mail Address' className='in'/><br/>
                       <h5 className='mail'>Phone</h5>
                       <input type='text' placeholder='Phone number'className='in'/><br/>
                       <h5 className='mail'>Address</h5>
                       <input type='text' placeholder='Address' className='in'/><br/>
                       <h5 className='mail'>Password</h5>
                       <input type='text' placeholder=' Password' className='in'/><br/>

                       <button className='btnSign'>Sign Up</button>
                       
                        
                   </div>   
               </div>


            {/**footer */}
            <footer className='footer-b'>
                <img src={images.Bin} alt='bin' className='bin-a'/>
                <h4 className='footer1'>Copyright 2023 by Referenes Data. All Rights Reserved.</h4>
            </footer>
        </div>
        )
    };
    export default SignUp;