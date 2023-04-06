import React,{useState} from "react";
import SideNavB from '../Utilities/SideNavB';
import 'bootstrap/dist/css/bootstrap.css';
import { ResponsivePie } from '@nivo/pie';
import './styles.css';
import { Nav, NavItem, Button, TabContent, TabPane } from 'reactstrap';
const data = [
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
  const data1 = [
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
  const data2 = [
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
  const data3 = [
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
const Bdashboard =()=>{
    const [activeTab, setActiveTab] = useState('tab1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
    return(
        <div className="dash-container">
            <SideNavB/>
            <div className='dash-main-box'>
            <div className='dash-box-a'>
                <div style={{width:'8vw',float:'left'}}>
                  <h6 className='d-text'>Request</h6>
                </div>
                <div style={{width:'4vw',height:'4vw',float:'right',margin:'0.8vw',padding:'0.2vw'}}>
                  <ResponsivePie
                    data={data}
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
                    data={data1}
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
                    data={data2}
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
                    data={data3}
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
        <div className='dash-table-box-b'>
        <div >
      <p>Historical Data</p>
      <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery">

            </input>
              
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

        </div>
        <div className='dash-table-box-a'>
            <h5 style={{textAlign:'center',marginTop:'0.5vw'}}>PRICE LIST</h5>
                <Nav tabs className="justify-content-center" >
                <NavItem>
                <Button
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => toggleTab('tab1')}
                    style={{
                        backgroundColor:'green',
                        boxShadow:'0.05vw 0.05vw 0.1vw black',
                        color:'white',
                        marginRight:'1vw',
                    }}
                >
                    Glass
                </Button>
                </NavItem>
                <NavItem>
                <Button
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => toggleTab('tab2')}
                    style={{
                        backgroundColor:'green',
                        boxShadow:'0.05vw 0.05vw 0.1vw black',
                        color:'white',
                        marginRight:'1vw',
                    }}
                >
                    Iron
                </Button>
                </NavItem>
                <NavItem>
                <Button
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => toggleTab('tab3')}
                    style={{
                        backgroundColor:'green',
                        boxShadow:'0.05vw 0.05vw 0.1vw black',
                        color:'white',
                        marginRight:'1vw',
                    }}
                >
                    Plastic
                </Button>
                </NavItem>
                <NavItem>
                <Button
                    className={activeTab === 'tab4' ? 'active' : ''}
                    onClick={() => toggleTab('tab4')}
                    style={{
                        backgroundColor:'green',
                        boxShadow:'0.05vw 0.05vw 0.1vw black',
                        color:'white',
                        marginRight:'1vw',
                    }}
                >
                    Other
                </Button>
                </NavItem>
                <TabContent activeTab={activeTab} className='tab-dash' style={{marginTop:'1vw'}} >
                <TabPane tabId="tab1">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">1</button>
                    <button type="button" className="list-group-item list-group-item-action">A second button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                </div>
                </TabPane>
                <TabPane tabId="tab2">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">2</button>
                    <button type="button" className="list-group-item list-group-item-action">A second button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                </div>
                </TabPane>
                <TabPane tabId="tab3">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">3</button>
                    <button type="button" className="list-group-item list-group-item-action">A second button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                </div>
                </TabPane>
                <TabPane tabId="tab4">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" aria-current="true">4</button>
                    <button type="button" className="list-group-item list-group-item-action">A second button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                </div>
                </TabPane>
            </TabContent>
            </Nav>
            
        </div>
        <div className='dash-table-box-c'> 
        </div>
    </div>

        </div>
)
};
export default Bdashboard;