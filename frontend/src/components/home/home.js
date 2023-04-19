import images from "../../constant/images";


const home =()=>{
    return(
        <div className='food' >
            <div className='section-1'>
        
            </div>
            <div className='section-2'>
            <div className="T-home">
                <h2 className="Title-Home">Create a cleaner, greener world with our innovative garbage </h2>
                <h2 className="Title-Home">management and recycling solutions</h2></div>
                <div className="box-H">
                    <div className="box-1">
                        <img Src={images.Gc} className='h-image'/>
                        <h6 className="about-Text">Saw any garbage lying around that needs to be collected?</h6>
                        <a href='/' className="btn" ><div>Schedule a Garbage Collection</div></a>
                    </div>
                    <div className="box-1">
                        <img Src={images.Wc} className='h-image'/>
                        <h6 className="about-Text">Have any recyclable waste lying around that you'd like to sell?</h6>
                        <a href='/' className="btn" ><div>Sell Your Recyclable Waste</div></a>
                    </div>
                    <div className="box-1">
                        <img Src={images.Rc} className='h-image'/>
                        <h6 className="about-Text">Looking for sustainable products made from recycled waste?</h6>
                        <a href='/' className="btn" ><div>Shop Sustainable Products</div></a>
                    </div>
                    <div className="box-1">
                        <img Src={images.Pc} className='h-image'/>
                        <h6 className="about-Text">Are you Interested in waste sorting and recycling?</h6>
                        <a href='/' className="btn" ><div>Learn Waste sorting and Recycling</div></a>
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <div className='About-us'>
                    <h3>ABOUT US</h3>
                        <p>Waste management involves the regular collection, transportation as well as processing and disposal or recycling and monitoring of different types of waste materials. These services can save your business a considerable amount of money, and can also prevent the environment from being harmed.</p>
                    
                    </div>
                <div className='H-left_box'>
                    <img src={images.Slide1} className='H-left_i'/>

        
                    <img src={images.Slide2} className='H-right_i'/>
                </div>
            
            </div>
            <div className='section-4'>
                <div className='About-us-s'>
                    <h3>TEST</h3>
                        <p>Waste management involves the regular collection, transportation as well as processing and disposal or recycling and monitoring of different types of waste materials. These services can save your business a considerable amount of money, and can also prevent the environment from being harmed.</p>
                    
                </div>
                    <div className='H-right_box'>
                        <img src={images.Slide4} className='H-right_a'/>
                        <img src={images.Slide3} className='H-left_a'/>
                    </div>

                </div>
    </div>
    )
};
export default home;