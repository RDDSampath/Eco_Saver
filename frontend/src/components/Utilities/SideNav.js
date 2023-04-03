import React, { useState } from 'react';
import './SideNav.css';

const SideNavi = () => {

    return (
      <div style={{flexDirection:'row'}}>
          <div>
              <div className="sidenav open">
                  <a href="#">Organic Dashboard</a>
                  <a href="#">Organic Disposal</a>
                  <a href="#">My Profile</a>
                  <a href="#">Log Out</a>
              </div>
        </div>
      </div>
    );
  }