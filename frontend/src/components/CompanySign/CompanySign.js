import React from 'react';
import './ComSignStyles.css';
import images from '../../constant/images';

const CompanySign =()=>{
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
                 <img src={images.Comsign} alt='comsign' className='cSign-a'/>
                   <div className='lgnData-a'>
                     
                       <h3 className='lgnhd'>Sign Up</h3>

                       <h6 className='mail'>Company Name</h6>
                       <input type='text' placeholder='Enter Your Company Name'className='in'/><br/>
                       <h6 className='mail'>Owner</h6>
                       <input type='text' placeholder='Owner Name'className='in'/><br/>
                   <div className='d'>
                    <div className='d-a'>  
                       <h6 className='mail-a'>Phone</h6> <br/>
                       <input type='text' placeholder='Phone number'className='in-a'/>
                    </div>
                    <div className='d-b'>
                       <h6 className='mail-b'>E-mail</h6><br/>
                       <input type='text' placeholder='E-mail Address' className='in-b'/>
                    </div>
                   </div>
                       <h6 className='mail'>Address</h6>
                       <input type='text' placeholder=' Street Address' className='in'/><br/>
                       <input type='text' placeholder='State' className='in-c-a'/>
                       <input type='text' placeholder='City' className='in-c'/>
                       <h6 className='mail'>Password</h6>
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
    export default CompanySign;