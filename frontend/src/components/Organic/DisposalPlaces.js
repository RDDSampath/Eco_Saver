import React from 'react';
import './Styles.css';
import SideNavI from '../Utilities/SideNavI';
import Homea from '../../assest/Image/homea.png';
import Homeb from '../../assest/Image/homeb.png';
import Homec from '../../assest/Image/homec.png';
import Homed from '../../assest/Image/homed.png';
import Homee from '../../assest/Image/homee.png';
import Homef from '../../assest/Image/homef.png';

import images from '../../constant/images';

const place = [
    { title: 'place 1', Image: Homea, homeName: 'Green tea home',address:'Hidellana , Rathnapura , Sri Lanka' },
    { title: 'place 2', Image: Homeb, homeName: 'Star sun ',address:'No 3 , Colombo ,  Sri Lanka' },
    { title: 'place 3', Image: Homec, homeName: 'Window Garden House',address:'1 /1C Malabe , Kaduwela' },
    { title: 'place 4', Image: Homed, homeName: 'Happy home',address:'2/IB , Badulla , Sri Lanka' },
    { title: 'place 5', Image: Homee, homeName: 'Window Garden House',address:'1 /1C Malabe , Kaduwela' },
    { title: 'place 6', Image: Homef, homeName: 'White Garden ',address:'No 8/1A , Colombo ,  Sri Lanka' },
  ];
const DisposalPlaces =()=>{
    
    return(
        <div className='container-d'>
            <SideNavI/>
            <div className='h-container'>
                {place.map((place, index) => (
              <div key={index} className='h-box'>
                <img src={place.Image} alt='house' className='home-ino'/>
                <div>
                <img src={images.Location} alt='location' className='location'/>
                  <b className='hname'>{place.homeName}</b>
                  {place.address}
                </div>
              </div>
                ))}
          </div>

        </div>
    )
};
export default DisposalPlaces;