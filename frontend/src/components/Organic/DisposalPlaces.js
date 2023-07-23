import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import SideNavC from '../Utilities/SideNavC';
import Header from '../home/HeaderS';

import images from '../../constant/images';

const DisposalPlaces =()=>{
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    retrieveInorganics();
  }, []);

  const retrieveInorganics = () => {
    axios.get("/organic/getall").then(res => {
      if(res.data.success) {
        setData(res.data.existingOrganics);
        console.log('organic',data);
      }
    });
  }; 
  const handleClick = (place) => {
    navigate(`/organic/disposal/${place._id}`, { state: { place } });
  };
    return(<>
        <div className='dash-container'>
        <div style={{backgroundColor:'black'}}>
          <Header/>
          </div>
            <SideNavC/>
            <h2 style={{marginLeft:'30vw',marginTop:'1vw'}}>Disposal Places</h2>
                {data.map((place, index) => (
                  <a onClick={()=>handleClick(place)}>
              <div key={index} className='h-box'>
                <img src={place.imageUrl} alt='house' className='home-ino'/>
                <div>
                <img src={images.Location} alt='location' className='location'/>
                  <b className='hname'>{place.Place_name}</b>
                  {place.location}
                </div>
              </div>
              </a>
                ))}
        </div>
        </>
    )
};
export default DisposalPlaces;