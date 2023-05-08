import React from 'react'
import SideNavC from '../Utilities/SideNavC';
import { Card } from 'reactstrap';
import images from '../../constant/images';


function DetailDisposal() {

  return (
    <div className='container-c'>
        <SideNavC className='sidenav'/>
        <span className='detail-textu'>Details</span> <button id="submit" name="submit">Generate Report  </button>
            <Card className='pdCard' style={{width:'70vw',height:'36vw'}}>
                <Card className='pdCardIn' style={{marginTop:'3vw',width:'64vw',height:'30vw'}}>
                    <div className='form-card'>
                        <div className='form-card-left'>
                            <img src={images.Home_1} className='homeImg' />
                            <button id="edit" name="submit">Edit</button>
                            <button id="delete" name="submit">Delete</button>
                        </div>
                        <div className='form-card-right'>
                            <label style={{fontSize:'2vw'}}>Green tea home</label><div/>
                            <span></span><label>A/2b Hidellana , Rathnapura , Sri Lanka</label><div/>
                            <label>Kaml de Silva</label><div/>
                            <label>0711345674</label><div/>
                            <label>Kaml@gmail.com</label><div/>
                            <label>Waste clothes-10 Kg</label><div/>
                            <img src={images.RecycleMan} style={{marginLeft:'15vw'}} /><br/>
                        
                        </div>
                    </div>
                </Card>

            </Card>

    </div>
  )
};

export default DetailDisposal;