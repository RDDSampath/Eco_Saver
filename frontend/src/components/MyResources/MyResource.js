import React from 'react'
import './MyResStyles.css';
import images from '../../constant/images';


const MyResource = () => {
  return (
    <div className='container-a'>
       <img src={images.MyRes} alt='resimg' className='ResImg'/>
        <div className='aa'>
        <a href='/myResourceform'><div  className='bb'>Add My Resource</div></a>
        <a href='/'><div  className='bb'>View My Resource</div></a>
        <h5 className='srh' style={{marginTop:'2vw',float:'left',marginLeft:'44vw',marginTop:'1.7vw',fontWeight:'bold'}}>Search</h5>
        <input type='text'  placeholder='Search category' style={{width:'16vw',height:'3vw',marginTop:'1.2vw', float:'right',marginRight:'2vw',borderRadius:'0.3vw'}}/>

      </div>
      <div className='resBox'>
        <h4 className='name'>Kamal Silva</h4>
          <div className='inResBox'>
          <img src={images.Form1Img} alt='Res1' className='res-a'/>
           <div className='details'>
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
              <h5 className='data-a'>www.wrfound.org.uk</h5>
              <button className='btnD'> Download</button>
            </div>
          </div>
          <h4 className='cmt'>Comment</h4><br/>
          <textarea  type='text'  placeholder='Write a Commnet......' style={{width:'80%',borderRadius:'0.5vw',float:'left',marginLeft:'2.3vw'}}  />
          <a href='/'><img src={images.Sent} alt='sent' className='snt-a'/> </a>
      </div>

      <div className='resBox'>
        <h4 className='name'>Lakmal perera</h4>
          <div className='inResBox'>
          <img src={images.Form1Img2} alt='Res1' className='res-a'/>
           <div className='details'>
             <h5 className='data-b'>2.How a City Achieved Zero Waste</h5>
              <h5 className='data'>e-waste</h5>
              <h5 className='data'>How a City Achieved Zero Waste" is a case study that 
                                   provides insights into how a city has successfully implemented
                                   a zero waste program. The case study may cover topics such as the
                                   challenges faced by the city in achieving zero waste, 
                                   the strategies and initiatives implemented to reduce waste, and the
                                   results and impact of the program. The study may also highlight best
                                   practices and lessons learned that can be applied in other cities 
                                   and communities looking to implement similar waste reduction programs.
                                   </h5>
              <h5 className='data-a'>https://customboxesnow.com/blog/how-to-recycle-the-ultimate-guide-to-recycling </h5>
              <button className='btnD'> Download</button>
            </div>
          </div>
          <h4 className='cmt'>Comment</h4><br/>
          <textarea  type='text'  placeholder='Write a Commnet......' style={{width:'80%',borderRadius:'0.5vw',float:'left',marginLeft:'2.3vw'}}  />
          <a href='/'><img src={images.Sent} alt='sent' className='snt-a'/> </a>
      </div>
    </div>
  )
}
export default MyResource;