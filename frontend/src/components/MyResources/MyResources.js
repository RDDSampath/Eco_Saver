import { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../../constant/images';
import jsPDF from "jspdf";
import "jspdf-autotable";
import Header from '../home/HeaderS';
import Footer from '../home/footer';

const MyResources = () => {
  const [myResForms, setMyResForms] = useState([]);
  const uData = JSON.parse(localStorage.getItem('userData'));

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
  
  const getReport = (my) => {
    const doc = new jsPDF();
    doc.setFontSize(15);
    doc.text("My Resourses Form ", 10, 7);
    doc.setFontSize(12);
    doc.text("Title ", 10, 14);
    doc.setFontSize(10);
    doc.text(my.title, 10, 21);
    doc.setFontSize(12);
    doc.text("Category ", 10, 28);
    doc.setFontSize(10);
    doc.text(my.Category, 10, 35);
    doc.setFontSize(12);
    doc.text("Description ", 10, 42);
    doc.setFontSize(10);
    doc.text(my.description, 10, 49);

    // Add styling to the PDF document
    doc.setFontSize(12);
    doc.text("Generated on " + new Date().toLocaleString(), 10, 280);
    doc.setTextColor(100);
    

    // Export the PDF document
    doc.save("myresoursesForm.pdf");
  }
  
  return (
    <div className='container-a'>
     
     <Header/>
       <img src={images.MyRes} alt='resimg' className='ResImg'/>
        <div className='aa'>
        <a href='/myResourcesForm'><div  className='bb'>Add My Resource</div></a>
        <a href='/viewMyResources'><div  className='bb'>View My Resource</div></a>
        <h5 className='srh' style={{marginTop:'2vw',float:'left',marginLeft:'44vw',marginTop:'1.7vw',fontWeight:'bold'}}>Search</h5>
        <input type='text'  placeholder='Search category' style={{width:'16vw',height:'3vw',marginTop:'1.2vw', float:'right',marginRight:'2vw',borderRadius:'0.3vw'}}/>

      </div>
      {myResForms.map((my) => (
      <div className='resBox' key={my._id}>
        <br/>
          <div className='inResBox'>
          <h4 className='name'>{uData.userName}</h4>
          <img src={my.file} alt='Res1' className='res-a'/>
           <div className='details'>
             <h5 className='data-b'>{my.title}</h5>
              <h5 className='data'>{my.Category}</h5>
              <h5 className='data' >{my.description}</h5>
              <button className='btnD' onClick={()=>getReport(my)}> Download</button>
            </div>
          </div>
          {/* <h4 className='cmt'>Comment</h4><br/>
          <textarea  type='text'  placeholder='Write a Commnet......' style={{width:'80%',borderRadius:'0.5vw',float:'left',marginLeft:'2.3vw'}}  />
          <a href='/'><img src={images.Sent} alt='sent' className='snt-a'/> </a> */}
      </div>
      ))}
       <Footer/>
    </div>
  )
}
export default MyResources;