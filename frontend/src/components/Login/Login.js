import React from 'react';
import './Styles.css';
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
            {/**footer */}
            <footer className='footer-a'>
                <img src={images.Bin} alt='bin' className='bin-a'/>
                <h4 >Copyright 2023 by Referenes Data. All Rights Reserved.</h4>
            </footer>
            {/**body */}
         
            
            

        </div>
    )
};
export default Login;