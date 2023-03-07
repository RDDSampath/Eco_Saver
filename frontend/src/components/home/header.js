import React from 'react';
import './styles.css';
import images from '../../constant/images';
import colors from '../../constant/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const header =()=>{
    return(
      <nav className="nav">
        <div className='nav1'>
        <ul class="nav-button-top">
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
              <a class='sign-btn' href='/' style={{color:'#016142'}}>SIGN UP</a>
            </li>
            <li>
              <a class='log-btn' href='/' style={{color:'#00ff00'}}>LOG IN</a>
            </li>
            <li>
              <a href='/'>Product Listing</a>
            </li>
            <li>
              <a href='/'> Recycling Education</a>
            </li>
            <li>
              <a href='/'> Waste Management</a> 
            </li>
            <li>
              <a href='/'>HOME</a></li>
          </ul>
          
        </div>
    </nav>
    )
};
export default header;