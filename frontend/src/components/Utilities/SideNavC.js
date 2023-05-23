import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLayerGroup,faCartPlus,faStore,faUser,faRightFromBracket,faTrash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import images from '../../constant/images';

const SideNavC = () => {

  return (
    <div style={{flexDirection:'row'}}>
        <div>
            <div className="sidenav open">
            <img src={images.LogoNav} style={{width:'11vw',height:'11vw'}} alt='image' className='navLogo' />
                <a href="/organic"><FontAwesomeIcon icon={faLayerGroup} /> Organic Dashboard</a>
                <a href="/organic/postDisposal"><FontAwesomeIcon icon={faCartPlus} /> Organic Disposal</a>
                <a href="/organic/organicPlaces"><FontAwesomeIcon icon={faCartPlus} /> Organic Places</a>
                <a href="#"> <FontAwesomeIcon icon={faUser} /> My Profile</a>
                <a href="#"><FontAwesomeIcon icon={faRightFromBracket} /> Log Out</a>
            </div>
      </div>
    </div>
  );
}

export default SideNavC;
