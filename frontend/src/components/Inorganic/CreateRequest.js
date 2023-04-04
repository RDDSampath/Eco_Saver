import React,{useState} from 'react';
import './Styles.css';
import SideNav from '../Utilities/SideNav';
import { Nav, NavItem, Button, TabContent, TabPane } from 'reactstrap';
const CreateRequest =()=>{
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
                <h3 className='topic-create'>Inorganic Garbadge Collection</h3>
                <div style={{flexDirection:'row'}}>
                    <div className='create-right'>
                        {/**add your collection */}
                    <Nav tabs className="justify-content-center" >
                        <div className='left-c'>
                            <h4 className='sub-topic-c' >Add Your Collection</h4>  
                                <NavItem>
                                    <Button
                                        className={activeTab === 'tab1' ? 'active' : ''}
                                        onClick={() => toggleTab('tab1')}
                                        style={{
                                            backgroundColor:'green',
                                            boxShadow:'0.1vw 0.1vw 1vw black',
                                            color:'white',
                                            marginLeft:'2vw',
                                            width:'12vw',
                                            border:'1px solid white',
                                            marginTop:'2vw'
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
                                            boxShadow:'0.1vw 0.1vw 1vw black',
                                            color:'white',
                                            marginLeft:'2vw',
                                            width:'12vw',
                                            border:'1px solid white',
                                            marginTop:'2vw'
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
                                            boxShadow:'0.1vw 0.1vw 1vw black',
                                            color:'white',
                                            marginLeft:'2vw',
                                            width:'12vw',
                                            border:'1px solid white',
                                            marginTop:'2vw'
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
                                            boxShadow:'0.1vw 0.1vw 1vw black',
                                            color:'white',
                                            marginLeft:'2vw',
                                            width:'12vw',
                                            border:'1px solid white',
                                            marginTop:'2vw'
                                        }}
                                    >
                                        Other
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <Button
                                        className={activeTab === 'tab5' ? 'active' : ''}
                                        onClick={() => toggleTab('tab5')}
                                        style={{
                                            backgroundColor:'green',
                                            boxShadow:'0.1vw 0.1vw 1vw black',
                                            color:'white',
                                            marginLeft:'2vw',
                                            width:'12vw',
                                            border:'1px solid white',
                                            marginTop:'2vw'
                                        }}
                                    >
                                        Location
                                    </Button>
                                </NavItem>
                        </div>
                        <div className='right-c'>
                        <form>
                            <TabContent activeTab={activeTab} className='tab-dash' style={{marginTop:'1vw'}} >
                                <TabPane tabId="tab1">
                                <div className="list-group">
                                    <div type="div" className="box-c-list" >
                                        <h6><b>Bottle</b></h6>
                                            <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6><b>Plate</b></h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6><b>Other</b></h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <NavItem><input className='next-Btn' type="submit" onClick={()=>setNext('tab2')} value="Next" /></NavItem>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab2">
                                <div className="list-group">
                                    <div type="div" className="box-c-list">
                                        <h6><b>Iron plate</b></h6>
                                            <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6><b>Iron pipe</b></h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6><b>Other</b></h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <input className='next-Btn' type="submit" onClick={() => toggleTab('tab3')} value="Next" />
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab3">
                                <div className="list-group">
                                    <div type="div" className="box-c-list">
                                        <h6><b>Bottle</b></h6>
                                            <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6><b>plate</b></h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6><b>Other</b></h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <input className='next-Btn' type="submit" onClick={() => toggleTab('tab4')} value="Next" />
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab4">
                                <div className="list-group">
                                    <div type="div" className="box-c-list">
                                        <h6>Bottle</h6>
                                            <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6>Plate</h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <h6>Other</h6>
                                        <div className='input' ><input type="text" name="name" /><b> KG</b></div>
                                        
                                        <input className='next-Btn' type="submit" onClick={() => toggleTab('tab5')} value="Set Location" />
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab5">
                                <div className="list-group">
                                    <div type="div" className="box-c-list">
                                    <h6>House No</h6>
                                            <div className='input-l' ><input type="text" className='input-ll' name="name" /><b> ,</b></div>
                                        
                                        <h6>Street</h6>
                                        <div className='input-l' ><input type="text" className='input-ll' name="name" /><b> ,</b></div>
                                        
                                        <h6>City</h6>
                                        <div className='input-l' ><input type="text" className='input-ll' name="name" /><b> ,</b></div>

                                        <h6>Phone No</h6>
                                        <div className='input-l' ><input type="text" className='input-ll' name="name" /><b> ,</b></div>
                                        <input className='next-Btn' type="submit" value="Submit" />
                                    </div>
                                </div>
                                </TabPane>
                            </TabContent>
                            </form>
                        </div>
                        </Nav>
                    </div>
                    <div className='create-left'>
                        {/**slide show*/}

                    </div>
                </div>
            </div>
    </div>
)};
export default CreateRequest;