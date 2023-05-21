import React,{useState} from 'react'
import axios from 'axios';
import Header from '../home/HeaderS';
import Footer from '../home/footer';

const MyResourseForms = () => {
  
  const [formData, setFormData] = useState({
          title: '',
          Category: '',
          tags: '',
          description: '',
          file: [],
  });
  console.log(formData);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imagePromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)
      .then((base64Images) => {
        setFormData({
          ...formData,
          file: [base64Images],
        });
      })
      .catch((error) => {
        console.error(error);
      });

      
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('/myResForm/add', formData).then((res) => {
      if (res.data.success) {
        alert('Added Successfully');
        window.location = "/myResources";
        setFormData({
          title: '',
          Category: '',
          tags: '',
          description: '',
          file: [],
        });
      } else {
        alert('Failed to add ');
      }
    }).catch((error) => {
        alert('Failed to add');
    });
};


    return (
        <div className='container-2'>
          <Header/>
            <div className='form-1'>
             <div className='topic'>
                <h5 style={{marginLeft:'3vw',paddingTop:'1vw'}}>Add My Recycling Resources</h5>
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
      <div className='file'style={{ width: '100%' }}>
        <label htmlFor="file" className='in-d'>File:</label><br/>
        <input type="file" onChange={handleImageChange} className='o-input' />
        
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
      <button className='submit' id="submit" name="submit">Submit</button>
    </form>
    </div>
    <Footer/>
  </div>
  )
}
export default MyResourseForms;