import React,{useState, useEffect} from 'react';
import images from '../../constant/images';

const HeaderS =({userData})=>{

  if (userData == null) {
    const uData = JSON.parse(localStorage.getItem('userData'));
    userData = {
      userName: uData.userName,
    };
  }

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  
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
                <div> 
                    <div style={{width:'8vw', alignItems:'center', justifyContent:'center'}}>
                        <a href='' className='H-img'>
                        <img src={images.Prof} alt='profile' className='H-imga'/>
                        <h6 style={{fontSize:'12px', marginRight:'2px', fontWeight:600}}>{userData.userName}</h6>
                        </a>
                        <a  className='H-img' onClick={logOut}>
                            <img src={images.Logout} alt='logout' className='H-imgb' />
                            
                        </a>
                    </div>
                    
                    
                </div>
              </li>
              <li>
                <a href='/'>Product Listing</a>
              </li>
              <li>
                <a href='/'> Recycling Education &#9662;</a>
                <ul className="dropdown-menu">
                  <li className='drop'><a href="/myResources">My Resources </a></li>
                  <li className='drop'><a href="/myResourcesForm">Create Resources</a></li>
                  <li className='drop'><a href="/ViewMyResources">View Resources</a></li>
                </ul>
              </li>
              <li>
              <a href="/inorganic">Waste Management &#9662;</a>
                <ul className="dropdown-menu">
                  <li className='drop'><a href="/organic">Organic </a></li>
                  <li className='drop'><a href="/inorganic">Inorganic</a></li>
                </ul>
              </li>
              <li>
                <a href='/'>HOME</a>
                </li>
            </ul>
        </div>
    </nav>
    )
};
export default HeaderS;