import React,{useState, useEffect} from 'react';
import SideNav from '../Utilities/SideNav';
import {Button} from 'reactstrap';
import 'react-phone-number-input/style.css';
import images from '../../constant/images';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../home/HeaderS';
import Footer from '../home/footer';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

  const ViewRequest =(props)=>{

  const location = useLocation();
  const formData = location.state?.formData;
  const [submitting, setSubmitting] = useState(false);
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const gb = parseInt(formData.GlassBottle);
  const gp = parseInt(formData.GlassPlate);
  const go = parseInt(formData.GlassOther);
  const ip = parseInt(formData.IronPlate);
  const ipp = parseInt(formData.IronPipe);
  const io = parseInt(formData.IronOther);
  const pb = parseInt(formData.PlasticBottle);
  const pp = parseInt(formData.PlasticPlate);
  const po = parseInt(formData.PlasticOther);
  const b = parseInt(formData.Batteries);
  const bl = parseInt(formData.Bulbs);
  const ew = parseInt(formData.ElectricalWaste);

const glassW = gb + gp + go;
const ironW = ip + ipp + io;
const plasticW = pb + pp + po;
const otherW = b + bl + ew;

  const glassP = (gb*10) + (gp*10) + (go*8);
  const ironP = (ip*20) + (ipp*30) + (io*15);
  const plasticP = (pb*5) + (pp*8) + (po*5);
  const otherP = (b*500) + (bl*10) + (ew*100);

    // Calculate the total weight and price based on the individual values
    const totalWeight = (glassW + ironW + plasticW + otherW);
    const totalPrice = (glassP + ironP + plasticP + otherP);


    const formDataWithTotal = {
      ...formData,
      totalWeight: totalWeight,
      totalPrice: totalPrice,
      date: new Date().toISOString(),
    };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await axios.post('/inorganic/add', formDataWithTotal);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Garbage Collection added',
          text: 'The garbage collection was added successfully!',
        }).then(() => {
        window.location = '/inorganic';
        });
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Failed to add Garbage Collection',
        text: 'Something went wrong. Please try again.',
      });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Failed to add Garbage Collection',
        text: 'Something went wrong. Please try again.',
      });;
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete =()=>{
    alert('Deleted !');
    window.location = '/a';
  };

  
  
    return(
        <div className='container-c'>
          <div style={{backgroundColor:'black'}}>
          <Header/>
          </div>
            <SideNav className='sidenav'/>
            <div className='container-create'>
            <h3 className='topic-create'>Inorganic waste </h3>
            <div style={{flexDirection:'row', backgroundColor:'green'}}>
                    <div className='create-leftv'>
                    <Slider {...settings}>
                            <div>
                                <img src={images.S1} alt="slider" style={{width:'25vw',height:'35vw',borderRadius:'0.3vw'}} />
                            </div>
                            <div>
                                <img src={images.S2} alt="slider" style={{width:'25vw',height:'35vw',borderRadius:'0.3vw'}} />
                            </div>
                            <div>
                                <img src={images.S3} alt="slider" style={{width:'25vw',height:'35vw',borderRadius:'0.3vw'}} />
                            </div>
                        </Slider>
                    </div>
                    <div className='create-rightv'>
                        <div className='itemBarv'>
                            <div className='item-view'>Category</div>
                            <div className='item-view'>Glass</div>
                            <div className='item-view'>Iron</div>
                            <div className='item-view'>Plastic</div>
                            <div className='item-view'>Other</div>
                        </div>
                        <div className='itemBarv'>
                            <div className='item-view'>Total Weight</div>
                            <div className='item-view'>{glassW} KG</div>
                            <div className='item-view'>{ironW} KG</div>
                            <div className='item-view'>{plasticW} KG</div>
                            <div className='item-view'>{otherW} KG</div>
                        </div>
                        <div className='itemBarv'>
                            <div className='item-view'>Total prize</div>
                            <div className='item-view'>{glassP} LKR</div>
                            <div className='item-view'>{ironP} LKR</div>
                            <div className='item-view'>{plasticP} LKR</div>
                            <div className='item-view'>{otherP} LKR</div>
                        </div>
                        <div className='itemBarv'>
                            <div className='item-view'>Sub Total</div>
                            <div className='item-view'>Total Weight</div>
                            <div className='item-view' style={{backgroundColor:'#abc',height:'3vw',borderRadius:'1vw', border:'1px solid black'}}>{totalWeight} KG</div>
                            <div className='item-view'>Total Price</div>
                            <div className='item-view' style={{backgroundColor:'#abc',height:'3vw',borderRadius:'1vw', border:'1px solid black'}}>{totalPrice} LKR</div>
                        </div>
                        <div className='iconSet-v'>
                            <a href="/c"><img src={images.Edit} className='icon-img-v'/></a>
                            <img src={images.Delete} className='icon-img-v' onClick={handleDelete}/>
                            <Button className='Btn-V'  onClick={handleSubmit} >Confirm &#9989;</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
)};
export default ViewRequest;