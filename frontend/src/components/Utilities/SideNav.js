import React, { useState } from 'react';
import './SideNav.css';

const SideNavi = () => {

    return (
      <div style={{flexDirection:'row'}}>
          <div>
              <div className="sidenav open">
                  <a href="#"><center>Organic Dashboard</center></a>
                  <a href="#"><center>Organic Disposal Plcaces</center></a>
                  <a href="#"><center>My Profile</center></a>
                  <a href="#"><center>Log Out</center></a>
              </div>
        </div>
      </div>
    );
  }

  export default SideNavi;