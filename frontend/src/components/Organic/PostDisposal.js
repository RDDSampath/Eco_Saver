import React,{useState} from 'react'
import SideNavC from '../Utilities/SideNavC';
import { Card } from 'reactstrap';
import images from '../../constant/images';
import axios from 'axios';

function PostDisposal() {
  const [formData, setFormData] = useState({
    Owner_name: '',
    Owner_number: '',
    email_address: '',
    Place_name: '',
    type: '',
    weight: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('/organic/add', formData).then((res) => {
      if (res.data.success) {
        alert('Organic Disposal Place Added Successfully');
        window.location = "/od";
        setFormData({
          Owner_name: '',
          Owner_number: '',
          email_address: '',
          Place_name: '',
          type: '',
          weight: '',
          location: ''
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
                          <label>Upload a image of the place</label><a href=''><span>Upload *</span></a><br/>
                          <button id="submit" name="submit">Submit</button>
                        </div>
                        <div className='form-card-right'>
                        <label>Enter Organic Disposal Type *</label><br/>
                        <select  name="type" value={formData.type} className="o-input" onChange={handleInputChange}>
                          <option value="1">Option one</option>
                          <option value="2">Option two</option>
                        </select><br/>
                          <label>Weight (kg) *</label><br/>
                          <input type='text' name='weight' value={formData.weight} onChange={handleInputChange} placeholder='10' className='o-input' /><br/>
                          <label>Enter location *</label><br/>
                          <input type='text' name='location' value={formData.location} onChange={handleInputChange} placeholder='A/2b Hidellana, Rathnapura, Sri Lanka' className='o-input' /><br/>
                          <img src={images.EcoGirlYellow} alt='image'/>
                        </div>
                    </div>
                    </form>
                </Card>

            </Card>

    </div>
  )
};

export default PostDisposal;