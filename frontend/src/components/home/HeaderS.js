import React,{useState, useEffect} from 'react';
import images from '../../constant/images';

const HeaderS =()=>{

  const handleLogout= () => {
    window.localStorage.clear();
    window.location.href = '/';
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
                    <div style={{width:'15vw', alignItems:'center', justifyContent:'center'}}>
                        <a href='' className='H-img'>
                        <img src={images.Prof} alt='profile' className='H-imga'/>
                        </a>
                        <a  className='H-img' onClick={handleLogout}>
                            <img src={images.Logout} alt='logout' className='H-imgb' />
                        </a>
                    </div>
                    <h6 style={{fontSize:'12px', marginRight:'10px', fontWeight:600}}>kamal</h6>
                    
                </div>
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
export default HeaderS;