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