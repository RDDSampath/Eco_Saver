import React, { Component, useEffect, useState } from "react";
import images from "../../constant/images";
import HeaderS from "./HeaderS";
import Footer from "./footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeS =({userData})=>{

    return(
        <div className='home'>
             
            <div className='section-1' id='sec_1'>
            <div className='T-home'>
            <HeaderS userData={userData}/>
            <h1 className='sec-topic' >𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐄𝐜𝐨𝐒𝐚𝐯𝐞𝐫</h1>
            <p>
                <h3 className='sec-title'>𝐄𝐜𝐨𝐒𝐚𝐯𝐞𝐫 𝐢𝐬 𝐚 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦 𝐭𝐡𝐚𝐭 𝐚𝐢𝐦𝐬 𝐭𝐨 𝐩𝐫𝐨𝐦𝐨𝐭𝐞 𝐬𝐮𝐬𝐭𝐚𝐢𝐧𝐚𝐛𝐢𝐥𝐢𝐭𝐲 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐭𝐡𝐞 𝐮𝐬𝐞 𝐨𝐟 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐚𝐧𝐝 𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐭𝐨 𝐚𝐝𝐝𝐫𝐞𝐬𝐬 𝐭𝐡𝐞 𝐢𝐬𝐬𝐮𝐞𝐬 𝐨𝐟 𝐰𝐚𝐬𝐭𝐞 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐚𝐧𝐝 𝐫𝐞𝐜𝐲𝐜𝐥𝐢𝐧𝐠.</h3>

            </p>
                <img src={images.A1} className='home-sideLogo'/>
            </div>
            <div className="B-home">
                <h2 className="Title-Home">Create a cleaner, greener world with our innovative garbage </h2>
                <h2 className="Title-Home">management and recycling solutions</h2>
            </div>
            </div>
             
            <div className='section-2'>
                <div className="box-H">
                <a href='/organic' className="btn" ><div className="box-1">
                        <div className="hh-box">
                            <img src={images.A5} className='h-image'/>
                        </div>
                        
                        <div className="btn-hs">Schedule a Garbage Collection</div>
                    </div></a>
                    <a href='/inorganic' className="btn" ><div className="box-1">
                    <div className="hh-box">
                        <img src={images.A3} className='h-image'/>
                    </div>
                        
                        <div className="btn-hs">Sell Your Recyclable Waste</div>
                    </div></a>
                    <a href='/myResources'><div className="box-1">
                    <div className="hh-box">
                        <img src={images.A2} className='h-image'/>
                    </div>
                        <div className="btn-hs">Shop Sustainable Products</div>
                    </div></a>
                    <a href='/' className="btn" >
                    <div className="box-1">
                    <div className="hh-box">
                        <img src={images.A6} className='h-image'/>
                    </div>
                        
                        <div className="btn-hs">Learn Waste sorting and Recycling</div>
                    </div></a>
                </div>   
            </div>
            <div className='section-3' id="aboutUS">
                <h3>About Us</h3>
                <img src={images.About}/>
                <div className="about-Boxb">
                
                    EcoSaver is a platform that aims to revolutionize waste management by creating a marketplace for sustainable waste disposal. We believe that waste management should be a collaborative effort between individuals, businesses, and the environment.

Our platform allows individuals to sell their waste, while businesses can buy it for reuse or recycling. By doing so, we are promoting a circular economy, reducing waste, and conserving resources.

At EcoSaver, we are committed to providing eco-friendly solutions for waste management. We believe that small changes can have a big impact, and we encourage everyone to join us in creating a cleaner, greener future.

                </div>
            
            </div>
            <div className='section-4' id="contactUS">
                
            <h3>Contact Us</h3>
            <img src={images.Contact} className="secIMG"/>
            <div className="contact-left">
                <div style={{float:'left',}} className="contact-box">
                <h5><FontAwesomeIcon icon={faPhone} /></h5>
                <p> </p><br/><br/>
                <h5><FontAwesomeIcon icon={faLocationDot} /></h5>
                <p> </p><br/><br/>
                <h5><FontAwesomeIcon icon={faEnvelope} /></h5>
                </div>
                <div className="contact-box">
                        <h5>Phone Number:</h5>
                        <p>041 52 68 356</p>
                        <h5>Address</h5>
                        <p>123, Galle Road, Colombo 03</p>
                        <h5>E-mail</h5>
                        <p>eco.saver@gmail.com</p>
                </div>
                <img src={images.whatsapp} className="contactS" style={{width:'100px',height:'100px',marginLeft:'2vw'}}/>
                <img src={images.Email} className="contactS" style={{width:'100px',height:'100px',marginLeft:'2vw'}}/>
                <img src={images.telegram} className="contactS" style={{width:'100px',height:'100px',marginLeft:'2vw'}}/>
            </div>
        </div>
    <Footer/>
    </div>
    )
};
export default HomeS;