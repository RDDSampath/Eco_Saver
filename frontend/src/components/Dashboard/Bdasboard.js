import React,{useState} from "react";
import SideNavB from '../Utilities/SideNavB';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Nav, NavItem, Button, TabContent, TabPane } from 'reactstrap';
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
        <div className='dash-box'>
            <h6 className='d-text'>Request</h6>
            <h5 className='d-value'>164</h5>
            <div className="spinner-border text-primary" role="status" style={{float:'right'}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        <div className='dash-box'>
            <h6 className='d-text'>Available</h6>
            <div style={{flexDirection:'row'}}>
                <h5 className='d-value'>200</h5>
                <div className="spinner-border text-warning" role="status" style={{float:'right'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div className='dash-box'>
            <h6 className='d-text'>Total Earn</h6>
            <div style={{flexDirection:'row'}}>
                <h5 className='d-value'>500,000 LKR</h5>
                <div className="spinner-border text-success" role="status" style={{float:'right'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div className='dash-box'>
            <h6 className='d-text'>Total save weight</h6>
            <h5 className='d-value'>5000 KG</h5>
            <div className="spinner-border text-danger" role="status" style={{float:'right'}}>
                <span className="visually-hidden">Loading...</span>
            </div>
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