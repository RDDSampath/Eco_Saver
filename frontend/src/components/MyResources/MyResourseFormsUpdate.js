import React,{useState} from 'react'
import axios from 'axios';
import Header from '../home/HeaderS';
import Footer from '../home/footer';
import { useLocation, useNavigate } from 'react-router-dom';


const MyResourseFormsUpdate = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  const { item } = loc.state;
  const id = item._id;
  const [formData, setFormData] = useState({
          title: item.title,
          Category: item.Category,
          tags: item.tags,
          description: item.description
  });
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.put('/myResForm/update/'+id, formData).then((res) => {
      if (res.data.success) {
        alert('updated successfully');
        setFormData({
          title: '',
          Category: '',
          tags: '',
          description: ''
        });
        window.location = "/viewMyResources";
      } else {
        alert('Failed to update ');
      }
    }).catch((error) => {
        alert('Failed to update');
    });
};
    return (
        <div className='container-2'>
          <div style={{backgroundColor:'black'}}>
          <Header/>
          </div>
            <div className='form-1'>
             <div className='topic'>
                <h5 style={{marginLeft:'3vw',paddingTop:'1vw'}}>Update My Recycling Resources</h5>
             </div>
    <form  className='frm '  onSubmit={onSubmit}>
     <div className='letters'>        
      <div className='title' style={{ width: '100%' }}>
        <label htmlFor="title" className='in-d'>Title:</label><br/>
        <input type="text" name="title" className='o-input'
         value={formData.title} onChange={handleInputChange}
        />
      </div>
      <div className='category'style={{ width: '100%' }}>
        <label htmlFor="category" className='in-d'>Category:</label><br/>
        <select  name="Category"className='o-input'
         value={formData.Category} onChange={handleInputChange}
        >
          <option value="">Select category</option><br/>
          <option value="plastic">Plastic</option>
          <option value="paper">Paper</option>
          <option value="metal">Metal</option>

        </select>

      </div>
      <div className='tags'style={{ width: '100%' }}>
        <label htmlFor="tags" className='in-d'>Tags:</label><br/>
        <input type="text" name="tags" className='o-input'
         value={formData.tags} onChange={handleInputChange}
        />
      </div>
      <div className='description'style={{ width: '100%' }}>
        <label htmlFor="description" className='in-d'>Description:</label><br/>
        <textarea name="description" className='o-input' 
         value={formData.description} onChange={handleInputChange}
        ></textarea>
      </div>
      </div>
      <button className='submit' id="submit" name="submit">Update</button>
    </form>
    
    </div>
    <Footer/>
  </div>
  )
}
export default MyResourseFormsUpdate;