import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLayerGroup,faCartPlus,faStore,faUser,faRightFromBracket,faTrash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import images from '../../constant/images';

const SideNavB = () => {

  return (
    <div style={{flexDirection:'row'}}>
        <div>
            <div className="sidenav open">
                <img src={images.LogoNav} style={{width:'11vw',height:'11vw'}} className='navLogo' />
                <a href="/userdashboard"><FontAwesomeIcon icon={faLayerGroup} /> Dashboard</a>
                <a href="/c"><FontAwesomeIcon icon={faCartPlus} /> Add Inorganic</a>
                <a href="/"> <FontAwesomeIcon icon={faStore} /> Go to Market</a>
                <a href="/"><FontAwesomeIcon icon={faUser} /> My Profile</a>
                <a href="/"><FontAwesomeIcon icon={faRightFromBracket} /> Log Out</a>
                </div>
            
      </div>
        
    </div>
  );
}

export default SideNavB;
