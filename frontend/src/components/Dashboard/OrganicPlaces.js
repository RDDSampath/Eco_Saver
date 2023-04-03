import React,{useState} from 'react';
import './Styles.css';
import SideNav from '../Utilities/SideNav';
import { Nav, NavItem, Button, TabContent, TabPane } from 'reactstrap';
import images from '../../constant/images';
const OrganicPlaces =()=>{
    const [activeTab, setActiveTab] = useState('tab1');
    const [next,setNext] = useState('');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
    return(
        <div className='container-c'>
            <SideNav className='sidenav'/>
            <div className='container-create'>
              
                <div style={{flexDirection:'row'}}>

                <div style={{textAlign: 'right', marginBottom: '10px'}}>
                &nbsp;
                &nbsp;
        <button>+ Add Place</button>
        &nbsp;
        &nbsp;
        &nbsp;
      </div>

                <div class="main">



<div class="cards">

<div class="image">
<a href='/'><img src={images.Home_1} alt='home_1'/></a>

</div>

<div class="title">
    <h6>Green tea home</h6>

</div>

<div class="des">

<div class="location">
<p><a href='/'><img src={images.Location} alt='location'/></a>Hidellana, Rathnapura, Sri Lanka</p>
</div>

    <button>search</button>

</div>

</div>



<div class="cards">

<div class="image">
<a href='/'><img src={images.Home_2} alt='home_2'/></a>

</div>

<div class="title">
    <h6>Star sun</h6>

</div>

<div class="des">
    <p>No 3, Colombo, Sri Lanka</p>
    <button>search</button>

</div>

</div>



<div class="cards">

<div class="image">
<a href='/'><img src={images.Home_3} alt='home_3'/></a>

</div>

<div class="title">
    <h6>Lady bird Home</h6>

</div>

<div class="des">
    <p>1/1C Malabe, Kaduwela</p>
    <button>search</button>

</div>

</div>



<div class="cards">

<div class="image">
<a href='/'><img src={images.Home_4} alt='home_4'/></a>

</div>

<div class="title">
    <h6>Happy home</h6>

</div>

<div class="des">
    <p>2/1B, Badulla, Sri Lanka</p>
    <button>search</button>

</div>

</div>



<div class="cards">

<div class="image">
<a href='/'><img src={images.Home_5} alt='home_5'/></a>

</div>

<div class="title">
    <h6>Window Garden House</h6>

</div>

<div class="des">
    <p>1/1A Moratuwa, Colombo</p>
    <button>search</button>

</div>

</div>



<div class="cards">

<div class="image">
<a href='/'><img src={images.Home_6} alt='home_6'/></a>

</div>

<div class="title">
    <h6>White Garden</h6>

</div>

<div class="des">
    <p>No 8/1A, Colombo, Sri Lanka</p>
    <button>search</button>

</div>

</div>
</div>
                 


                 
                   
                </div>
            </div>
    </div>
)};
export default OrganicPlaces;






      