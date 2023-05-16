import React,{useState} from 'react';
import SideNav from '../Utilities/SideNavB';
import { Nav, NavItem, Button, TabContent, TabPane, Card } from 'reactstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../../constant/images';
import Header from '../home/HeaderS';
import Footer from '../home/footer';


const CreateRequest =()=>{
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const [activeTab, setActiveTab] = useState('tab1');
    const currentDate = new Date().toISOString();
    const [formData, setFormData] = useState({
        GlassBottle: '0',
        GlassPlate: '0',
        GlassOther: '0',
        IronPlate: '0',
        IronPipe: '0',
        IronOther: '0',
        PlasticBottle: '0',
        PlasticPlate: '0',
        PlasticOther: '0',
        Batteries: '0',
        Bulbs: '0',
        ElectricalWaste: '0',
        HouseNo: '',
        Street: '',
        City: '',
        PhoneNo: '',
        date:currentDate
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
        const handlePhoneChange = (value) => {
          setFormData({
            ...formData,
            PhoneNo: value
          });
        };
      
          console.log('req page',formData);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
    return(
        <div className='container-c'>
            <Header/>
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
                                        className={activeTab === 'tab1' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab1')}
                                        id='CRBtn'
                                    >
                                        Glass
                                    </Button>
                                    </NavItem>
                                    <NavItem>
                                    <Button
                                        className={activeTab === 'tab2' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab2')}
                                        id='CRBtn'
                                    >
                                        Iron
                                    </Button>
                                    </NavItem>
                                    <NavItem>
                                    <Button
                                        className={activeTab === 'tab3' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab3')}
                                        id='CRBtn'
                                    >
                                        Plastic
                                    </Button>
                                    </NavItem>
                                    <NavItem>
                                    <Button
                                        className={activeTab === 'tab4' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab4')}
                                        id='CRBtn'
                                    >
                                        Other
                                    </Button>
                                </NavItem>
                                <NavItem>
                                    <Button
                                        className={activeTab === 'tab5' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab5')}
                                        id='CRBtn'
                                    >
                                        Location
                                    </Button>
                                </NavItem>
                                <img src={images.LogoNav2} style={{width:'11vw',height:'11vw',marginLeft:'2vw'}} className='navLogo2' />
                        </div>
                        <div className='right-c'>
                        <form noValidate >
                            <TabContent activeTab={activeTab} className='tab-dash' style={{marginTop:'1vw'}} >
                                <TabPane tabId="tab1">
                                <div className="list-group">
                                    <div type="div" className="box-c-list" >
                                    <h3 className='reqList'>Glass</h3>
                                        <h6 className='input-Text'>Bottle</h6>
                                            
                                                <input type="number" 
                                                name='GlassBottle'
                                                value={formData.GlassBottle}
                                                onChange={handleInputChange}
                                                className='input-a'
                                                placeholder="   00"
                                                 />
                                                <b> KG</b>
                                        
                                        <h6 className='input-Text'>Plate</h6>
                                        
                                            <input type="number" 
                                            name='GlassPlate'
                                            value={formData.GlassPlate}
                                            onChange={handleInputChange}
                                            className='input-a'
                                            placeholder="   00"
                                             />
                                            <b> KG</b>
                                        
                                        <h6 className='input-Text'>Other</h6>
                                        
                                            <input type="number" 
                                            name='GlassOther'
                                            value={formData.GlassOther}
                                            onChange={handleInputChange}
                                            className='input-a' 
                                            placeholder="   00"
                                            /><b> KG</b>
                                        
                                        <Button className='next-Btn' onClick={() => toggleTab('tab2')}>Next</Button>
                                        <img src={images.N1} style={{
                                            width:'13vw',
                                            height:'13vw',
                                            marginLeft:'2vw',
                                            marginTop:'2vw'
                                        }}/>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab2">
                                <div className="list-group">
                                    <div className="box-c-list">
                                    <h3 className='reqList'>Metal</h3>
                                        <h6 className='input-Text'>Iron plate</h6>
                                            
                                                <input type="number" 
                                                name='IronPlate'
                                                value={formData.IronPlate}
                                                onChange={handleInputChange}
                                                className='input-a'
                                                placeholder="   00"
                                            /><b> KG</b>
                                        
                                        <h6 className='input-Text'>Iron pipe</h6>
                                        
                                            <input type="number" 
                                            name='IronPipe'
                                            value={formData.IronPipe}
                                            onChange={handleInputChange}
                                            className='input-a'
                                            placeholder="   00"
                                            styles={{height:'10px'}}
                                            /><b> KG</b>

                                        
                                        <h6 className='input-Text'>Other</h6>
                                            
                                            <input type="number" 
                                            name='IronOther'
                                            value={formData.IronOther}
                                            onChange={handleInputChange}
                                            className='input-a'
                                            placeholder="   00"
                                            /><b> KG</b>
                                        
                                        <Button className='next-Btn' onClick={() => toggleTab('tab3')}>Next</Button>
                                        <img src={images.N2} style={{
                                            width:'13vw',
                                            height:'13vw',
                                            marginLeft:'2vw',
                                            marginTop:'2vw'
                                        }}/>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab3">
                                <div className="list-group">
                                    <div type="div" className="box-c-list">
                                        <h3 className='reqList'>Plastic</h3>
                                        <h6 className='input-Text'>Bottle</h6>
                                            
                                                <input type="number" 
                                                name='PlasticBottle'
                                                value={formData.PlasticBottle}
                                                onChange={handleInputChange}
                                                className='input-a'
                                                placeholder="   00" 
                                                /><b> KG</b>
                                        
                                        <h6 className='input-Text'>plate</h6>
                                        
                                            <input type="number" 
                                            name='PlasticPlate'
                                            value={formData.PlasticPlate}
                                            onChange={handleInputChange}
                                            className='input-a'
                                            placeholder="   00"
                                            /><b> KG</b>
                                        
                                        <h6 className='input-Text'>Other</h6>
                                        
                                            <input type="number" 
                                            name='PlasticOther'
                                            value={formData.PlasticOther}
                                            onChange={handleInputChange}
                                            className='input-a'
                                            placeholder="   00"
                                            /><b> KG</b>
                                        
                                        <Button className='next-Btn' onClick={() => toggleTab('tab4')}>Next</Button>
                                        <img src={images.N3} style={{
                                            width:'13vw',
                                            height:'13vw',
                                            marginLeft:'2vw',
                                            marginTop:'2vw'
                                        }}/>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab4">
                                <div className="list-group">
                                    <div type="div" className="box-c-list">
                                    <h3 className='reqList'>Other</h3>
                                        <h6 className='input-Text'>Batteries</h6>
                                            
                                                <input type="number" 
                                                name='Batteries'
                                                value={formData.Batteries}
                                                onChange={handleInputChange}
                                                className='input-a' 
                                                placeholder="   00"
                                                /><b> KG</b>
                                        
                                        <h6 className='input-Text'>Bulb</h6>
                                        
                                            <input type="number" 
                                            name='Bulbs'
                                            value={formData.Bulbs}
                                            onChange={handleInputChange} 
                                            className='input-a'
                                            placeholder="   00"
                                            /><b> KG</b>
                                        
                                        <h6 className='input-Text'>Electrical Waste</h6>
                                        
                                            <input type="number" 
                                            name='ElectricalWaste'
                                            value={formData.ElectricalWaste}
                                            onChange={handleInputChange}
                                            className='input-a' 
                                            placeholder="   00" 
                                            /><b> KG</b>
                                        
                                        <Button className='next-Btn' onClick={() => toggleTab('tab5')}>Set Location</Button>
                                        <img src={images.N4} style={{
                                            width:'13vw',
                                            height:'13vw',
                                            marginLeft:'2vw',
                                            marginTop:'2vw'
                                        }}/>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab5">
                                <div className="list-group">
                                    <div type="div" className="box-c-list">
                                    <h3 className='reqList'>Location</h3>
                                    <h6 className='input-Text'>House No</h6>
                                            
                                                <input type="text" 
                                                name='HouseNo'
                                                value={formData.HouseNo}
                                                onChange={handleInputChange} 
                                                className='input-a'
                                                placeholder="   No 25/1"
                                                /><b> ,</b>
                                        
                                        <h6 className='input-Text'>Street</h6>
                                        
                                            <input type="text" className='input-a' 
                                            name='Street'
                                            value={formData.Street}
                                            onChange={handleInputChange} 
                                            placeholder="   School Road"
                                            /><b> ,</b>
                                        
                                        <h6 className='input-Text'>City</h6>
                                        
                                            <input type="text" className='input-a' 
                                            name='City'
                                            value={formData.City}
                                            onChange={handleInputChange} 
                                            placeholder="   Colombo"
                                            />
                                            
                                            <b> ,</b>

                                        <h6 className='input-Text'>Phone No</h6>
                                        <div  >

                                            <PhoneInput
                                                    id="phone"
                                                    name="PhoneNo"
                                                    placeholder="94 xx xx xxx"
                                                    value={formData.PhoneNo}
                                                    onChange={handlePhoneChange}
                                                    defaultCountry="LK"
                                                    className='input-a' 
                                                    style={{
                                                        border: 'none',
                                                        borderRadius:'none',
                                                      }}
                                                      
                                                />
                                                
                                                <button className='next-Btn' disabled><Link to='/inorganic/viewRequest' state={{formData:formData}} style={{textDecoration:'none', color:'#FFF'}}>Request</Link></button>
                                                
                                                </div>
                                               
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
                </div>
            </div>
            <Footer/>
    </div>
)};
export default CreateRequest;