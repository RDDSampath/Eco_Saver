import React from "react";
import './styles.css';
import SideNav from '../Utilities/SideNav';

const Ndashboard =()=>{
    return(
            <div className="dash-container">
                <SideNav/>
                <div className='dash-main-box'>
            <div className='dash-box'>
                <h6 className='d-text'>Request</h6>
                <h4 className='d-value'>164</h4>
            </div>
            <div className='dash-box'>
                <h6 className='d-text'>Available</h6>
                <h4 className='d-value'>200</h4>
            </div>
            <div className='dash-box'>
                <h6 className='d-text'>Total Earn</h6>
                <h4 className='d-value'>500,000 LKR</h4>
            </div>
            <div className='dash-box'>
                <h6 className='d-text'>Total save weight</h6>
                <h4 className='d-value'>5000 KG</h4>
            </div>
        </div>
        <div className='dash-main-box'>
            <div className='dash-table-box'>

            </div>
            <div className='dash-table-box-a'>
              <div className='dash-column'>
                <div className='dash-box-4'></div>
                <div className='dash-box-4'></div>
              </div>
              <div className='dash-column'>
                <div className='dash-box-4'></div>
                <div className='dash-box-4'></div>
              </div>
              <div className='dash-column'>
                <div className='dash-box-5'></div>
              </div>
            </div>
        </div>

            </div>
    )
};
export default Ndashboard;