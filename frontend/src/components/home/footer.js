import React from 'react';
import './styles.css';
import images from '../../constant/images';

const footer =()=>{
    return(
        <footer>
            <div className='footer'>
                    <ul className="foot-button-top">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li >
                    <a href="#">Waste Management</a>
                </li>
                <li>
                    <a  href="#">Recycling Education</a>
                </li>
                <li>
                    <a href="#">Product Listing</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Return policy</a>
                </li>
                </ul>
                <br/><br/><br/><br/>
                <div className='social'>
                    <a href='/'><img src={images.Facebook} alt='facebook'/></a>
                    <a href='/'><img src={images.Twitter} alt='twitter'/></a>
                    <a href='/'><img src={images.Linkedin} alt='Linkedin'/></a>
                </div>
                <h6 className='copy-text'>Copyright 2023 by Refsnes Data. All Rights Reserved.</h6>
        </div>
        <a href=''><img className='flogo' src={images.Flogo} alt='footer-logo'/></a>
        </footer>
    )
};
export default footer;