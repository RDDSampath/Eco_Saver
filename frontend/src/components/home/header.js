import React from 'react';
import images from '../../constant/images';

const header =()=>{
    return(
      <nav className="nav">
        <div className='nav1'>
          <ul className="navBtn">
            <li>
                <a href="#">Mode <img className='mode' src={images.Mode} alt='mode'/></a>
              </li>
            <li >
              <a href="#">Return policy</a>
              </li>
            <li>
              <a  href="#">About us</a>
              </li>
            <li>
              <a href="#">Contact us </a>
            </li>
          </ul>
          </div>
          <div className='nav2'>
            <img className='logo-style' src={images.Logo} alt='logo'/>
            <ul className='title-menue'>
            <li>
            <a class="RegisterBtn" href="/sign-up">Register</a>
              </li>
              <li>
              <a class="logInBtn" href="/sign-in">LOG IN</a>
              </li>
              <li>
                <a href='/sign-in'>Product Listing</a>
              </li>
              <li>
                <a href='/sign-in'> Recycling Education</a>
              </li>
              <li>
                <a href='/sign-in'> Waste Management</a> 
              </li>
              <li>
                <a href='/'>HOME</a>
                </li>
            </ul>
        </div>
    </nav>
    )
};
export default header;