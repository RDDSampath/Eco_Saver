import React,{useState} from 'react';
import './OrganicD.css';
import SideNav from '../Utilities/SideNav';
import { Nav, NavItem, Button, TabContent, TabPane } from 'reactstrap';
import images from '../../constant/images';

const OrganicDash =()=>{
    const [activeTab, setActiveTab] = useState('tab1');
    const [next,setNext] = useState('');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };