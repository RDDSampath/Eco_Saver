import React, { useState } from 'react';
import './SideNav.css';

const SideNav = () => {

  return (
    <div style={{flexDirection:'row'}}>
        <div>
            <div className="sidenav open">
                <a href="#">Dashboard</a>
                <a href="#">Add Product</a>
                <a href="#">Go to Market</a>
                <a href="#">My Profile</a>
                <a href="#">Log Out</a>
            </div>
      </div>
        
    </div>
  );
}

export default SideNav;
