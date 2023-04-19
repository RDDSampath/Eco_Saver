import { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavC from '../Utilities/SideNavC';
import { Card } from 'reactstrap';
import images from '../../constant/images';

const UpdateDisposal=(props)=> {

  const [formData, setFormData] = useState({
    Owner_name: '',
    Owner_number: '',
    email_address: '',
    Place_name: '',
    type: '',
    weight: '',
    location: ''
  });
  const { Owner_name, Owner_number, email_address, Place_name, type, weight, location } = formData;
  const id = props.match.params.id;

  useEffect(() => {
    axios.get('/organic'+id).then((res) => {
      if (res.data.success) {
        setFormData(res.data.organic);
      }
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.put('/organic/update/'+id, formData).then((res) => {
      if (res.data.success) {
        alert('Organic updated successfully');
        setFormData({
          Owner_name: '',
          Owner_number: '',
          email_address: '',
          Place_name: '',
          type: '',
          weight: '',
          location: '',
        });
      }
    });
  };
  return (
    <div className='container-c'>
        <SideNavC className='sidenav'/>
            <Card className='pdCard'>
                <h5>Update a Organic Disposal Place</h5>
                <Card className='pdCardIn'>
                  <form onSubmit={onSubmit}>
                    <div className='form-card'>
                        <div className='form-card-left'>
                          <label>Enter the name of the owner *</label><br/>
                          <input type='text' name='Owner_name' id='Owner_name' value={Owner_name} onChange={handleInputChange} placeholder='Kaml de Silva' className='o-input' /><br/>
                          <label>Contact Number *</label><br/>
                          <input type='text' name='Owner_number' id='Owner_number' value={Owner_number} onChange={handleInputChange} placeholder='0711345674' className='o-input' /><br/>
                          <label>Email Address *</label><br/>
                          <input type='text' name='email_address' id='email_address' value={email_address} onChange={handleInputChange} placeholder='Kaml@gmail.com' className='o-input' /><br/>
                          <label>Enter the name of the place where  Organic Disposals are. *</label><br/>
                          <input type='text' name='Place_name' id='Place_name' value={Place_name} onChange={handleInputChange} placeholder='Green tea home' className='o-input' /><br/>
                          <label>Upload a image of the place</label><a href=''><span>Upload *</span></a><br/>
                          <button id="submit" name="submit" onClick={onSubmit}>Update</button>
                        </div>
                        <div className='form-card-right'>
                        <label>Enter Organic Disposal Type *</label><br/>
                        <select  name="type" id="type" value={type} className="o-input" onChange={handleInputChange}>
                          <option value="1">Option one</option>
                          <option value="2">Option two</option>
                        </select><br/>
                          <label>Weight (kg) *</label><br/>
                          <input type='text' name='weight' id='weight' value={weight} onChange={handleInputChange} placeholder='10' className='o-input' /><br/>
                          <label>Enter location *</label><br/>
                          <input type='text' name='location' id='location' value={location} onChange={handleInputChange} placeholder='A/2b Hidellana, Rathnapura, Sri Lanka' className='o-input' /><br/>
                          <img src={images.EcoGirlYellow} alt='image'/>
                        </div>
                    </div>
                  </form>
                </Card>

            </Card>

    </div>
  )
};

export default UpdateDisposal;