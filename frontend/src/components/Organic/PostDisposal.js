import React,{useState} from 'react'
import SideNavC from '../Utilities/SideNavC';
import { Card } from 'reactstrap';
import images from '../../constant/images';
import axios from 'axios';

function PostDisposal() {
  console.log(images);
  const [formData, setFormData] = useState({
    Owner_name: '',
    Owner_number: '',
    email_address: '',
    Place_name: '',
    type: '',
    weight: '',
    location: '',
    imageUrl:[]
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
          imageUrl: [base64Images],
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

    axios.post('/organic/add', formData).then((res) => {
      if (res.data.success) {
        alert('Organic Disposal Place Added Successfully');
        window.location = "/organic/disposalPlaces";
        setFormData({
          Owner_name: '',
          Owner_number: '',
          email_address: '',
          Place_name: '',
          type: '',
          weight: '',
          location: '',
          imageUrl: [],
        });
      } else {
        alert('Failed to add Organic Disposal Place');
      }
    }).catch((error) => {
        alert('Failed to add Organic Disposal Place');
    });
};

  return (
    <div className='container-c'>
        <SideNavC className='sidenav'/>
            <Card className='pdCard'>
                <h5>Post a Organic Disposal Place</h5>
                <Card className='pdCardIn'>
                  <form onSubmit={onSubmit}>
                  <div className='form-card'>
                        <div className='form-card-left'>
                          <label>Enter the name of the owner *</label><br/>
                          <input type='text' name='Owner_name' value={formData.Owner_name} onChange={handleInputChange} placeholder='Kaml de Silva' className='o-input' /><br/>
                          <label>Contact Number *</label><br/>
                          <input type='text' name='Owner_number' value={formData.Owner_number} onChange={handleInputChange} placeholder='0711345674' className='o-input' /><br/>
                          <label>Email Address *</label><br/>
                          <input type='text' name='email_address' value={formData.email_address} onChange={handleInputChange} placeholder='Kaml@gmail.com' className='o-input' /><br/>
                          <label>Enter the name of the place where  Organic Disposals are. *</label><br/>
                          <input type='text' name='Place_name' value={formData.Place_name} onChange={handleInputChange} placeholder='Green tea home' className='o-input' /><br/>

                          <label>Upload a image of the place</label>
                          <input type="file" multiple onChange={handleImageChange} className='o-input' />
                          <span>Upload *</span><br/>
                          <button id="submit" name="submit">Submit</button>
                        </div>
                        <div className='form-card-right'>
                        <label>Enter Organic Disposal Type *</label><br/>
                        <select  name="type" value={formData.type} className="o-input" onChange={handleInputChange}>
                          <option value="Paper sheets">Paper sheets</option>
                          <option value="Food disposal">Food disposal</option>
                          <option value="Tree leaf litter and other parts of trees">Tree leaf litter and other parts of trees</option>
                          <option value="Waste clothes">Waste clothes.</option>
                        </select><br/>
                          <label>Weight (kg) *</label><br/>
                          <input type='text' name='weight' value={formData.weight} onChange={handleInputChange} placeholder='10' className='o-input' /><br/>
                          <label>Enter location *</label><br/>
                          <input type='text' name='location' value={formData.location} onChange={handleInputChange} placeholder='A/2b Hidellana, Rathnapura, Sri Lanka' className='o-input' /><br/>
                          <img src={formData.imageUrl ==! [] ?(images.EcoGirlBlue):(formData.imageUrl)} style={{marginTop:'1vw'}}/>
                        </div>
                    </div>
                    </form>
                </Card>

            </Card>

    </div>
  )
};

export default PostDisposal;