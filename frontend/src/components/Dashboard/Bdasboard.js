import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import SideNavB from '../Utilities/SideNavB';
import 'bootstrap/dist/css/bootstrap.css';
import { ResponsivePie } from '@nivo/pie';
import images from '../../constant/images';
import { Nav, NavItem, Button, TabContent, TabPane, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Bdashboard =()=>{
    const [activeTab, setActiveTab] = useState('tab1');
    const [inorganics, setInorganics] = useState([]);
    const uid = inorganics.userId;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  useEffect(() => {
    retrieveInorganics();
  }, []);


  const retrieveInorganics = () => {
    axios.get("/inorganic/getall").then(res => {
      if(res.data.success) {
        setInorganics(res.data.existingInorganics);
        console.log(res.data.existingInorganics);
        console.log('Inorganic',inorganics);
      }
    });
  };

  const totalWeight = inorganics.reduce((acc, curr) => acc + parseInt(curr.totalWeight), 0);
  const totalPrice = inorganics.reduce((acc, curr) => acc + parseInt(curr.totalPrice), 0);

//search
const filterData = (inorganics, searchKey) => {
  const result = inorganics.filter((inorganic) =>
    inorganic.date.toLowerCase().includes(searchKey) ||
    inorganic.City.toLowerCase().includes(searchKey) ||
    inorganic.totalPrice.toLowerCase().includes(searchKey)
  );

  setInorganics(result);
};

const handleSearchArea = (e) => {
  const searchKey= e.currentTarget.value;

  axios.get("/inorganic/getall").then(res =>{
    if(res.data.success){
      filterData(res.data.existingInorganics, searchKey);
    }
  });
};

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const p1 = [
    {
      id: 'Yes',
      value: inorganics.length,
      color: '#ffffff',
    },
    {
      id: 'No',
      value: inorganics.length+'0',
      color: '#475BE8',
    },
  ];
  const p2 = [
    {
      id: 'Yes',
      value: inorganics.length+'0',
      color: '#ffffff',
    },
    {
      id: 'No',
      value: inorganics.length,
      color: '#FD8539',
    },
  ];
  const p3 = [
    {
      id: 'Yes',
      value: totalPrice,
      color: '#ffffff',
    },
    {
      id: 'No',
      value: 3000,
      color: '#2ED480',
    },
  ];
  const p4 = [
    {
      id: 'Yes',
      value: totalWeight,
      color: '#ffffff',
    },
    {
      id: 'No',
      value: 300,
      color: '#FE6D8E',
    },
  ];

  const onDelete = (id) => {
    axios.delete('/inorganic/delete/'+id)
      .then((res) => {
      alert("Successfully Deleted");
      window.location = '/b';
      retrieveInorganics();
    })
  };


    return(
        <div className="dash-container">
            <SideNavB/>
            <div className='dash-main-box'>
              <h1 style={{fontFamily: 'Kanit',}}>User Dashboard</h1>
            <div className='dash-box-a'>
                <div style={{width:'8vw',float:'left'}}>
                  <h6 className='d-text'>Request</h6>
                </div>
                <div style={{width:'4vw',height:'4vw',float:'right',margin:'0.8vw',padding:'0.2vw'}}>
                  <ResponsivePie
                    data={p1}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ datum: 'data.color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    style={{padding:'0.5vw'}}
                  />
                </div>
                <h4 className='d-value' style={{float:'left'}}>{inorganics.length}</h4>
            </div>
            <div className='dash-box-a'>
                <div style={{width:'8vw',float:'left'}}>
                  <h6 className='d-text'>Available</h6>
                </div>
                <div style={{width:'4vw',height:'4vw',float:'right',margin:'0.8vw',padding:'0.2vw'}}>
                  <ResponsivePie
                    data={p2}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ datum: 'data.color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    style={{padding:'0.5vw'}}
                  />
                </div>
                <h4 className='d-value' style={{float:'left'}}>5000</h4>
            </div>
            <div className='dash-box-a'>
                <div style={{width:'8vw',float:'left'}}>
                  <h6 className='d-text'>Total Earn</h6>
                </div>
                <div style={{width:'4vw',height:'4vw',float:'right',margin:'0.8vw',padding:'0.2vw'}}>
                  <ResponsivePie
                    data={p3}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ datum: 'data.color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    style={{padding:'0.5vw'}}
                  />
                </div>
                <h4 className='d-value' style={{float:'left'}}>{totalPrice} LKR</h4>
            </div>
            <div className='dash-box-a'>
                <div style={{width:'8vw',float:'left'}}>
                  <h6 className='d-text'>Total weight</h6>
                </div>
                <div style={{width:'4vw',height:'4vw',float:'right',margin:'0.8vw',padding:'0.2vw'}}>
                  <ResponsivePie
                    data={p4}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ datum: 'data.color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    style={{padding:'0.5vw'}}
                  />
                </div>
                <h4 className='d-value' style={{float:'left'}}>{totalWeight} KG</h4>
            </div>
        </div>
    <div className='dash-main-box'>
        <div className='dash-table-box-b'>
        <div >
      <p className='topic-ND'>Historical Data</p>
      <div className="col-lg-3 mt-2 mb-2" style={{width:'20vw',marginLeft:'1vw'}}>
            <input
            className="form-control"
            style={{width:'15vw', float:'left'}}
            type="search"
            placeholder="Search..."
            name="searchQuery"
            onChange={handleSearchArea}
            />
              <br/><br/>
          </div>
      <div className="N-table">
      <table style={{width:'100%',height:'10vw'}}>
            <thead>
            <tr>
                <th scope="col">Where</th>
                <th scope="col">Total Weight</th>
                <th scope="col">Total Price</th>
                <th scope="col">Date</th>
            </tr>
            </thead>
            <tbody className="table">
            {inorganics.map((rowData, index) => (
            
                <tr key={index}>
                  <td><a href={`/inorganic/getall/${rowData._id}`} style={{ textDecoration: "none" }}>
              {rowData.City}
            </a></td>
                <td>{rowData.totalWeight} LKR</td>
                <td>{rowData.totalPrice} LKR</td>
                <td>{moment(rowData.date).format('MMMM Do YYYY, h a')}</td>
                <td><div onClick={()=>onDelete(rowData._id)}><FontAwesomeIcon icon={faTrash} style={{color: "#ff0033",}} /></div></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>

        </div>
        <div className='dash-table-box-z'>
            <h5 style={{textAlign:'center',marginTop:'0.5vw'}}>PRICE LIST</h5>
                <Nav tabs className="justify-content-center" >
                <NavItem>
                <Button
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => toggleTab('tab1')}
                    id='priceBtn'
                >
                    Glass
                </Button>
                </NavItem>
                <NavItem>
                <Button
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => toggleTab('tab2')}
                    id='priceBtn'
                >
                    Iron
                </Button>
                </NavItem>
                <NavItem>
                <Button
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => toggleTab('tab3')}
                    id='priceBtn'
                >
                    Plastic
                </Button>
                </NavItem>
                <NavItem>
                <Button
                    className={activeTab === 'tab4' ? 'active' : ''}
                    onClick={() => toggleTab('tab4')}
                    id='priceBtn'
                >
                    Other
                </Button>
                </NavItem>
                <TabContent activeTab={activeTab} className='tab-dash' style={{marginTop:'1vw'}} >
                
                <TabPane tabId="tab1">
                <img src={images.N1} className='list-Img-n' id='list-Img-a'/>
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">
                      <h3>Glass වීදුරු</h3>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                      <h6>Glass Bottle</h6><h6>10 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                    <h6>Glass Plate</h6><h6>10 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>
                    <h6>Glass Other</h6><h6>8 LKR</h6>
                    </button>
                </div>
                </TabPane>
                <TabPane tabId="tab2">
                <img src={images.N2} className='list-Img-n' id='list-Img-a'/>
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">
                    <h3>Metal ලෝහ </h3>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                    <h6>Metal Plate</h6><h6>20 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                    <h6>Metal Pipe</h6><h6>30 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>
                    <h6>Metal Other</h6><h6>15 LKR</h6>
                    </button>
                </div>
                </TabPane>
                <TabPane tabId="tab3">
                <img src={images.N3} className='list-Img-n' id='list-Img-a'/>
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">
                    <h3>Plastic ප්ලාස්ටික්</h3>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                    <h6>Plastic Bottle</h6><h6>5 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                    <h6>Plastic Plate</h6><h6>8 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>
                    <h6>Plastic Other</h6><h6>5 LKR</h6>
                    </button>
                </div>
                </TabPane>
                <TabPane tabId="tab4">
                <img src={images.N4} className='list-Img-n' id='list-Img-a'/>
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">
                      <h5>Electrical Waste විද්‍යුත් අපද්‍රව්‍යය</h5>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                    <h6>Batteries</h6><h6>500 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                    <h6>Bulbs</h6><h6>10 LKR</h6>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>
                    <h6>Electrical Waste</h6><h6>100 LKR</h6>
                    </button>
                </div>
                </TabPane>
            </TabContent>
                
            </Nav>
            
        </div>
        <div className='dash-table-box-c'>
        <Slider {...settings}>
                            <div>
                                <img src={images.S4} alt="slider" style={{width:'73.5vw',height:'10vw',borderRadius:'0.3vw'}} />
                            </div>
                            <div>
                                <img src={images.S5} alt="slider" style={{width:'73.5vw',height:'10vw',borderRadius:'0.3vw'}} />
                            </div>
                            <div>
                                <img src={images.S6} alt="slider" style={{width:'73.5vw',height:'10vw',borderRadius:'0.3vw'}} />
                            </div>
                        </Slider>
        </div>
    </div>

        </div>
)
};
export default Bdashboard;