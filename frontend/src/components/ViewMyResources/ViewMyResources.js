import React from 'react'
import './ViewStyles.css';
import images from '../../constant/images';

const ViewMyResource = () => {
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
      </div>
  )
}
export default ViewMyResource;