import { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../../constant/images';
import Header from '../home/HeaderS';
import Footer from '../home/footer';
<<<<<<< HEAD
import { useLocation, useNavigate } from 'react-router-dom';

const ViewMyResources = () => {
  const navigate = useNavigate();
  const [myResForms, setMyResForms] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/myResForm/getall');
      setMyResForms(response.data.existingrMyresForm);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onDelete = (id) => {
    axios.delete('/myResForm/delete/'+id)
      .then((res) => {
      alert("Successfully Deleted");
      window.location = '/viewMyResources';
      fetchData();
    })
  };

  const handleClick = (item) => {
    navigate(`/updateMyResources/${item._id}`, { state: { item } });
  };

    return (
      <div className='container-b'>
        <Header/>
          <h4 className='topic-v'>My Recycling Education Resources</h4>
          {myResForms.map((item, index) => (
        <div className='inResBox1' key={index}>
          <img src={item.file} alt='Res2' className='res-b'/>
           <div className='details1'>
             <h5 className='data-b'>{item.title}</h5>
              <h5 className='data'>{item.Category}</h5>
               <h5 className='data'>{item.description}</h5>
              <button className='btnD1' onClick={()=>onDelete(item._id)}>Delete</button>
              <button className='btnD1' onClick={()=>handleClick(item)}>Edit </button>
            </div>
        </div>))}
        <Footer/>
=======

const ViewMyResources = () => {
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
      <div className='container-b'>
          <h4 className='topic-v'>My Recycling Education Resources</h4>
        <div className='inResBox1'>
          <img src={images.Form1Img} alt='Res2' className='res-b'/>
           <div className='details1'>
             <h5 className='data-b'>1.Tips for Recycling at Home</h5>
              <h5 className='data'>Composting</h5>
               <h5 className='data'>Tips for Recycling at Home" is a resource that provides information 
                                   on how individuals can make a positive impact on the environment by
                                   recycling at home. It offers practical advice and actionable tips for
                                   recycling common household items such as paper, plastics, and glass. 
                                   The resource might cover topics such as the benefits of recycling, how to 
                                   properly sort and prepare recyclable materials, and how to reduce waste
                                    by adopting sustainable practices. Ultimately, this resource aims to help 
                                    individuals become more environmentally conscious and active by 
                                    incorporating recycling into their daily lives.</h5>
               <h5 className='data-c'>www.wrfound.org.uk</h5>
              <button className='btnD1'>Delete</button>
              <button className='btnD1'>Edit </button>
            </div>
        </div>

        <div className='inResBox1'>
          <img src={images.Waste} alt='waste' className='res-b'/>
           <div className='details1'>
             <h5 className='data-b'>2.The Ultimate Guide to Recycling Plastics</h5>
              <h5 className='data'>plastic recycling</h5>
               <h5 className='data'>The Ultimate Guide to Recycling Plastics" is a comprehensive resource 
                                    that educates individuals on how to properly recycle plastic materials. 
                                    It covers various topics such as the types of plastics that can be 
                                    recycled, the different recycling symbols found on plastic products, 
                                    and the common challenges associated with plastic recycling. The guide
                                    may also discuss innovative recycling techniques such as upcycling and 
                                    provide information on how to properly dispose of non-recyclable plastics.
                                    Additionally, it may offer tips on how to reduce the use of plastic products
                                    and adopt more sustainable alternatives.</h5>
               <h5 className='data-c'>https://customboxesnow.com/blog/how-to-recycle-the-ultimate-guide-to-recycling </h5>
              <button className='btnD1'>Delete</button>
              <button className='btnD1'>Edit </button>
            </div>
        </div>
>>>>>>> 4eb98c1ad93a4ec9dc915539ac9c625c8683ef05
      </div>
  )
}
export default ViewMyResources;