import { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../../constant/images';
import Header from '../home/HeaderS';
import Footer from '../home/footer';
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
      </div>
  )
}
export default ViewMyResources;