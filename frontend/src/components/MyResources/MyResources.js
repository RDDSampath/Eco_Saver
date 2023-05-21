import { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../../constant/images';


const MyResources = () => {
  const [myResForms, setMyResForms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/myResForm/getall');
        setMyResForms(response.data.existingrMyresForm);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className='container-a'>
       <img src={images.MyRes} alt='resimg' className='ResImg'/>
        <div className='aa'>
        <a href='/myResourceform'><div  className='bb'>Add My Resource</div></a>
        <a href='/ViewMyResources'><div  className='bb'>View My Resource</div></a>
        <h5 className='srh' style={{marginTop:'2vw',float:'left',marginLeft:'44vw',marginTop:'1.7vw',fontWeight:'bold'}}>Search</h5>
        <input type='text'  placeholder='Search category' style={{width:'16vw',height:'3vw',marginTop:'1.2vw', float:'right',marginRight:'2vw',borderRadius:'0.3vw'}}/>

      </div>
      {myResForms.map((myResForm) => (
      <div className='resBox' key={myResForm._id}>
        <h4 className='name'>Kamal Silva</h4>
          <div className='inResBox'>
          <img src={myResForm.file} alt='Res1' className='res-a'/>
           <div className='details'>
             <h5 className='data-b'>{myResForm.title}</h5>
              <h5 className='data'>{myResForm.Category}</h5>
              <h5 className='data' >{myResForm.description}</h5>
              <h5 className='data-a'>www.wrfound.org.uk</h5>
              <button className='btnD'> Download</button>
            </div>
          </div>
          {/* <h4 className='cmt'>Comment</h4><br/>
          <textarea  type='text'  placeholder='Write a Commnet......' style={{width:'80%',borderRadius:'0.5vw',float:'left',marginLeft:'2.3vw'}}  />
          <a href='/'><img src={images.Sent} alt='sent' className='snt-a'/> </a> */}
      </div>
      ))}
    </div>
  )
}
export default MyResources;