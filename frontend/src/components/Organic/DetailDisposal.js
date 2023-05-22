import { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavC from '../Utilities/SideNavC';
import { Card } from 'reactstrap';
import images from '../../constant/images';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from "jspdf";
import "jspdf-autotable";

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
      const getReport = () => {
        const doc = new jsPDF();
        doc.setFontSize(15);
        doc.text("Disposal Place ", 10, 7);
        doc.setFontSize(12);
        doc.text("Place ", 10, 14);
        doc.setFontSize(10);
        doc.text(place.Place_name, 10, 21);
        doc.setFontSize(12);
        doc.text("Location ", 10, 28);
        doc.setFontSize(10);
        doc.text(place.location, 10, 35);
        doc.setFontSize(12);
        doc.text("Owner Name ", 10, 42);
        doc.setFontSize(10);
        doc.text(place.Owner_name, 10, 49);
        doc.text("Owner Number ", 10, 56);
        doc.setFontSize(10);
        doc.text(place.Owner_number, 10, 63);
        doc.text("Waste Weight", 10, 70);
        doc.setFontSize(10);
        doc.text(place.weight, 10, 77);
        doc.text("Type", 10, 84);
        doc.setFontSize(10);
        doc.text(place.type, 10, 89);
    
        // Add styling to the PDF document
        doc.setFontSize(12);
        doc.text("Generated on " + new Date().toLocaleString(), 10, 280);
        doc.setTextColor(100);
        
    
        // Export the PDF document
        doc.save("OrganicWaste.pdf");
      }


  return (
    <div className='container-c'>
        <SideNavC className='sidenav'/>
        <span className='detail-textu'>Details</span> <button id="submit" name="submit" onClick={getReport}>Generate Report  </button>
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
                            <label>{place.email_address}</label><div/>
                            <label>{place.type}-{place.weight} KG</label><div/>
                            <img src={images.RecycleMan} style={{marginLeft:'15vw'}} /><br/>
                        
                        </div>
                    </div>
                </Card>

            </Card>

    </div>
  )
};

export default DetailDisposal;