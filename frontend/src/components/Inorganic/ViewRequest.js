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

  const ViewRequest =(props)=>{

  const location = useLocation();
  const formData = location.state?.formData;
  const [submitting, setSubmitting] = useState(false);
 

  const image = [
    { id: 1, url: images.Slide1 },
    { id: 2, url: images.Slide2 },
    { id: 3, url: images.Slide3 }
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const glassW = (parseInt(formData.GlassBottle) + parseInt(formData.GlassPlate) + parseInt(formData.GlassOther));
const ironW = (parseInt(formData.IronPlate) + parseInt(formData.IronPipe) + parseInt(formData.IronOther));
const plasticW = (parseInt(formData.PlasticBottle) + parseInt(formData.PlasticPlate) + parseInt(formData.PlasticOther));
const otherW = (parseInt(formData.Batteries) + parseInt(formData.Bulbs) + parseInt(formData.ElectricalWaste));

  const glassP = (parseInt(formData.GlassBottle*10) + parseInt(formData.GlassPlate*10) + parseInt(formData.GlassOther*8));
  const ironP = (parseInt(formData.IronPlate*20) + parseInt(formData.IronPipe*30) + parseInt(formData.IronOther*15));
  const plasticP = (parseInt(formData.PlasticBottle*5) + parseInt(formData.PlasticPlate*8) + parseInt(formData.PlasticOther*5));
  const otherP = (parseInt(formData.Batteries*500) + parseInt(formData.Bulbs*10) + parseInt(formData.ElectricalWaste*100));

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
        alert('Form data submitted successfully!');
        window.location = '/inorganic';
      } else {
        alert('DB Something went wrong!');
      }
    } catch (err) {
      console.log(err);
      alert('Something went wrong!');
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
          <Header/>
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