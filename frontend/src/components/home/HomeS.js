import React, { Component, useEffect, useState } from "react";
import images from "../../constant/images";
import HeaderS from "./HeaderS";

const HomeS =({userData})=>{

    return(
        <div className='home'>
          <HeaderS userData={userData}/>
             
            <div className='section-1' id='sec_1'>
            <h1 className='sec-topic' >𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐄𝐜𝐨𝐒𝐚𝐯𝐞𝐫</h1>
            <p>
                <h3 className='sec-title'>𝐄𝐜𝐨𝐒𝐚𝐯𝐞𝐫 𝐢𝐬 𝐚 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦 𝐭𝐡𝐚𝐭 𝐚𝐢𝐦𝐬 𝐭𝐨 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 𝐬𝐮𝐬𝐭𝐚𝐢𝐧𝐚𝐛𝐢𝐥𝐢𝐭𝐲 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐭𝐡𝐞 𝐮𝐬𝐞 𝐨𝐟 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐚𝐧𝐝 𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐭𝐨 𝐚𝐝𝐝𝐫𝐞𝐬𝐬 𝐭𝐡𝐞 𝐢𝐬𝐬𝐮𝐞𝐬 𝐨𝐟 𝐰𝐚𝐬𝐭𝐞 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐚𝐧𝐝 𝐫𝐞𝐜𝐲𝐜𝐥𝐢𝐧𝐠.</h3>

            </p>
                <img src={images.A1} className='home-sideLogo'/>
            </div>
            <div className="T-home">
                <h2 className="Title-Home">Create a cleaner, greener world with our innovative garbage </h2>
                <h2 className="Title-Home">management and recycling solutions</h2></div>
            <div className='section-2'>
                <div className="box-H">
                    <div className="box-1">
                        <img src={images.A3} className='h-image'/><br/><br/><br/>
                        {/* <h6 className="about-Text">Saw any garbage lying around that needs to be collected?</h6> */}
                        <a href='/organic' className="btn" ><div className="btn-hs">Schedule a Garbage Collection</div></a>
                    </div>
                    <div className="box-1">
                        <img src={images.A5} className='h-image'/><br/><br/><br/>
                        {/* <h6 className="about-Text">Have any recyclable waste lying around that you'd like to sell?</h6> */}
                        <a href='/inorganic' className="btn" ><div className="btn-hs">Sell Your Recyclable Waste</div></a>
                    </div>
                    <div className="box-1">
                        <img src={images.A2} className='h-image'/><br/><br/><br/>
                        {/* <h6 className="about-Text">Looking for sustainable products made from recycled waste?</h6> */}
                        <a href='/myResources' className="btn" ><div className="btn-hs">Shop Sustainable Products</div></a>
                    </div>
                    <div className="box-1">
                        <img src={images.A6} className='h-image'/><br/><br/><br/>
                        {/* <h6 className="about-Text">Are you Interested in waste sorting and recycling?</h6> */}
                        <a href='/' className="btn" ><div className="btn-hs">Learn Waste sorting and Recycling</div></a>
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <h3>About Us</h3>
                <img src={images.About}/>
                <div className="about-Boxb">
                
                    EcoSaver is a platform that aims to revolutionize waste management by creating a marketplace for sustainable waste disposal. We believe that waste management should be a collaborative effort between individuals, businesses, and the environment.

Our platform allows individuals to sell their waste, while businesses can buy it for reuse or recycling. By doing so, we are promoting a circular economy, reducing waste, and conserving resources.

At EcoSaver, we are committed to providing eco-friendly solutions for waste management. We believe that small changes can have a big impact, and we encourage everyone to join us in creating a cleaner, greener future.

                </div>
            
            </div>
            <div className='section-4'>
                
            <h3>Contact Us</h3>
            <img src={images.Contact}/>
            <div className="contact-left">
                <div className="contact-box">
                    <div className="contact-box-1">
                        <h4>Address</h4>
                        <p>123, Galle Road, Colombo 03</p>
                        <h4>Address</h4>
                        <p>123, Galle Road, Colombo 03</p>
                    </div>
                </div>

            </div>
               

                </div>
    </div>
    )
};
export default HomeS;
