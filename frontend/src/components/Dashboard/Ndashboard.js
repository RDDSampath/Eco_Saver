import React from "react";
import SideNav from '../Utilities/SideNav';
import { ResponsivePie } from '@nivo/pie';
import Header from '../home/HeaderS';

const Ndashboard =()=>{
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
    return(
            <div className="dash-container">
              <div style={{backgroundColor:'black'}}>
          <Header/>
          </div>
                <SideNav/>
          <div className='dash-main-box'>
            <h1>Buser</h1>
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
                <h4 className='d-value' style={{float:'left'}}>164</h4>
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
                <h4 className='d-value' style={{float:'left'}}>5000 LKR</h4>
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
                <h4 className='d-value' style={{float:'left'}}>50000 KG</h4>
            </div>
        </div>
        <div className='dash-main-box'>
            <div className='dash-table-box'>
            <p className='topic-ND'>Historical Data</p>
        <div className="col-lg-3 mt-2 mb-2" style={{width:'20vw',marginLeft:'1vw'}}>
            <input
            className="form-control"
            style={{width:'15vw', float:'left'}}
            type="search"
            placeholder="Search..."
            name="searchQuery"
            />
              <br/><br/>
          </div>
            <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Drive Time</th>
                <th scope="col">Charges</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            
                <tr>
                <th></th>
                <td>
                    <a href='#'>a</a>
                    </td>
                <td>b</td>
                <td>c</td>
                <td>d</td>
                <td>
                    <a href="">
                    <i className="fa fa-trash-o" style={{fontSize:'30px',color:'red'}}></i>
                    </a>
                </td>
                </tr>
            </tbody>
        </table>
              

            </div>
            <div className='dash-table-box-a'>
              <div className='dash-column'>
                <div className='dash-box-4'></div>
                <div className='dash-box-4'></div>
              </div>
              <div className='dash-column'>
                <div className='dash-box-4'></div>
                <div className='dash-box-4'></div>
              </div>
              <div className='dash-column'>
                <div className='dash-box-5'></div>
              </div>
            </div>
        </div>

            </div>
    )
};
export default Ndashboard;