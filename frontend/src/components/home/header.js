import React from 'react';
import './styles.css';
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
                  <a style={{padding: '2vw 0.5vw'}} href='/'>
                  <button className='sign-btn'>SIGN UP</button>
                  </a>
              </li>
              <li>
                <a style={{padding: '2vw 0.5vw'}}  href='/' >
                  <button className='log-btn'>LOG IN</button>
                  </a>
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
                <a href='/'>HOME</a>
                </li>
            </ul>
        </div>
    </nav>
    )
};
export default header;