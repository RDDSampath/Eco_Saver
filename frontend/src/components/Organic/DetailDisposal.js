import { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavC from '../Utilities/SideNavC';
import { Card } from 'reactstrap';
import images from '../../constant/images';
import { useLocation, useNavigate } from 'react-router-dom';


const DetailDisposal = () => {
    const location = useLocation();
    const navigate = useNavigate();
  const { place } = location.state;
  const id = place._id;

    console.log('data==>>>', id);

    const onDelete = (id) => {
        axios.delete('/organic/delete/'+id)
          .then((res) => {
          alert("Successfully Deleted");
          window.location = '/organic';
        })
      };
      const handleClick = (place) => {
        navigate(`/organic/updateDisposal/${place._id}`, { state: { place } });
      };


  return (
    <div className='container-c'>
        <SideNavC className='sidenav'/>
        <span className='detail-textu'>Details</span> <button id="submit" name="submit">Generate Report  </button>
            <Card className='pdCard' style={{width:'70vw',height:'36vw'}}>
                <Card className='pdCardIn' style={{marginTop:'3vw',width:'64vw',height:'30vw'}}>
                    <div className='form-card'>
                        <div className='form-card-left'>
                            <img src={place.imageUrl} className='homeImg' />
                            <button id="edit" name="submit" onClick={()=>handleClick(place)}>Edit</button>
                            <button id="delete" name="submit" onClick={()=>onDelete(id)}>Delete</button>
                        </div>
                        <div className='form-card-right'>
                            <label style={{fontSize:'2vw'}}>{place.Place_name}</label><div/>
                            <span></span><label>{place.location}</label><div/>
                            <label>{place.Owner_name}</label><div/>
                            <label>{place.Owner_number}</label><div/>
                            <label>Kaml@gmail.com</label><div/>
                            <label>{place.type}-{place.weight}</label><div/>
                            <img src={images.RecycleMan} style={{marginLeft:'15vw'}} /><br/>
                        
                        </div>
                    </div>
                </Card>

            </Card>

    </div>
  )
};

export default DetailDisposal;