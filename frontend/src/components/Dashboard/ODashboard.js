import React from "react";
import SideNavC from '../Utilities/SideNavC';
import { ResponsivePie } from '@nivo/pie';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import images from "../../constant/images";
import Header from "../home/HeaderS";
import Footer from "../home/footer";

const ODashboard =()=>{
  const p1 = [
    {
      id: 'Yes',
      value: 3,
      color: '#ffffff',
    },
    {
      id: 'No',
      value: 6,
      color: '#475BE8',
    },
  ];
  const p2 = [
    {
      id: 'Yes',
      value: 3,
      color: '#ffffff',
    },
    {
      id: 'No',
      value: 6,
      color: '#FD8539',
    },
  ];
  const p3 = [
    {
      id: 'Yes',
      value: 3,
      color: '#ffffff',
    },
    {
      id: 'No',
      value: 6,
      color: '#2ED480',
    },
  ];
  const p4 = [
    {
      id: 'Yes',
      value: 3,
      color: '#ffffff',
    },
    {
      id: 'No',
      value: 6,
      color: '#FE6D8E',
    },
  ];

  const bardata = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]

  const items = [
    {
      id: 1,
      title: "Item 1",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Item 2",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      title: "Item 3",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      title: "Item 4",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      title: "Item 5",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
  const place = [
    { title: 'place 1', Image: images.Home_1, homeName: 'Green tea home',address:'Hidellana , Rathnapura , Sri Lanka' },
    { title: 'place 2', Image: images.Home_2, homeName: 'Star sun ',address:'No 3 , Colombo ,  Sri Lanka' },
    { title: 'place 3', Image: images.Home_3, homeName: 'Window Garden House',address:'1 /1C Malabe , Kaduwela' }
  ];
    return(
        <div className="organic-dash">
          <Header/>
          <SideNavC/>
          <div className='dash-main-box'>
            <h1>Organic Dashboard</h1>
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
                <h3 className='d-value' style={{float:'left'}}>164</h3>
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
                <h3 className='d-value' style={{float:'left'}}>5000</h3>
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
                <h3 className='d-value' style={{float:'left'}}>5000 LKR</h3>
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
                <h3 className='d-value' style={{float:'left'}}>50000 KG</h3>
            </div>
        </div>
        <div className='dash-main-box'>
          <div className="chartCard">
            <div className="CardheadChart">
              <h4>Total Content</h4>
            </div>
            <BarChart width={730} height={250} data={bardata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
            <img src={images.EcoGirlBlue} className="oDash-img"/>
            
            <div className="chartCard-right">
            <div className='od-container'>
              <div style={{flexDirection:'row',}}><h5>Organic disposal selling  Places</h5>
              <button id="seeMore" name="submit">Most Recent</button>
              </div>
              
                {place.map((place, index) => (
              <div key={index} className='o-box'>
                <img src={place.Image} alt='house' className='ohome-ino'/>
                <div>
                <img src={images.Location} alt='location' className='location'/>
                  <b className='hname'>{place.homeName}</b>
                  {place.address}
                </div>
              </div>
                ))}
          </div>
            </div>
            <div >
            
              
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </div>
    )
};
export default ODashboard;