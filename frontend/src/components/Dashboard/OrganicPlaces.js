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


        <div class="cards"></div>
        <div class="image"></div>
        <a href='/'><img src={images.Home_1} alt='home_1'/></a>

        </div>
        <div class="title"></div>
        <h6>Green tea home</h6>

        </div>

        <div class="des"></div>
        <p>Hidellana, Rathnapura, Sri Lanka</p>
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

      