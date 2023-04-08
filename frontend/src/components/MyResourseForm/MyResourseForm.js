import React from 'react'
import './MyResformStyles.css';


const MyResourseForm = () => {
    return (
        <div className='container-2'>
            <div className='form-1'>
             <div className='topic'>
                <h4>Add My Recycling Resources</h4>
             </div>
    <form  className='frm '>
     <div className='letters'>        
      <div className='title' style={{ width: '100%' }}>
        <label htmlFor="title" className='in-d'>Title:</label><br/>
        <input type="text" name="title"id="title" style={{ width: '100%' }}/>
      </div>
      <div className='category'style={{ width: '100%' }}>
        <label htmlFor="category" className='in-d'>Category:</label><br/>
        <select  name="category"id="category" style={{ width: '100%' }}>

          <option value="">Select category</option><br/>
          <option value="plastic">Plastic</option>
          <option value="paper">Paper</option>
          <option value="metal">Metal</option>

        </select>

      </div>
      <div className='file'style={{ width: '100%' }}>
        <label htmlFor="file" className='in-d'>File:</label><br/>
        <input type="file" name="file" id="file" style={{ width: '100%' }}/>
      </div>

      <div className='tags'style={{ width: '100%' }}>
        <label htmlFor="tags" className='in-d'>Tags:</label><br/>
        <input type="text" name="tags" id="tags" style={{ width: '100%' }}/>
      </div>
      <div className='description'style={{ width: '100%' }}>
        <label htmlFor="description" className='in-d'>Description:</label><br/>
        <textarea name="description" id="description"style={{ width: '100%' }} ></textarea>
      </div>
      </div>
    </form>
    <button className='submit' type="submit">Submit</button>
    </div>
  </div>
  )
}
export default MyResourseForm;