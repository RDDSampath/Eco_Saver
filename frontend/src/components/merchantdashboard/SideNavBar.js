import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLayerGroup,faCartPlus,faStore,faUser,faRightFromBracket,faTrash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import images from '../../constant/images';
import './styles.css';

const SideNavBar = () => {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div style={{flexDirection:'row'}}>
        <div>
            <div className="sidenav open">
                <img src={images.logoNav} style={{width:'13vw',height:'11vw'}} className='navLogo' />
                <a href="/sales-dashboard/newview"><FontAwesomeIcon icon={faLayerGroup} /> Sales Summary</a>
                <a href="/sales-dashboard/product-management"><FontAwesomeIcon icon={faCartPlus} /> Manage Products</a>
                <a href="/sales-dashboard/order-history"> <FontAwesomeIcon icon={faStore} /> Order History</a>
                <a href="/"><FontAwesomeIcon icon={faUser} /> My Profile</a>
                <a onClick={logOut}><FontAwesomeIcon icon={faRightFromBracket} /> Log Out</a>
                </div>
            
      </div>
        
    </div>
  );
}

export default SideNavBar;