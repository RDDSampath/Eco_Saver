import React,{useState, useEffect} from 'react';
import images from '../../constant/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone,faPenToSquare,faRightFromBracket,faXmark,
  faUser,faMapLocationDot,faLock,faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';

const HeaderS =({userData})=>{
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [id, setId] = useState(""); // Get the user ID from the userData object
  const [refresh, setRefresh] = useState(false);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
      setId(userData._id);
      setUserName(userData.userName);
      setPhoneNumber(userData.phoneNumber);
      setAddress(userData.address);
      setEmail(userData.email);
  }, [userData]);

  function onSubmit(e){
    e.preventDefault();

  
    fetch("/user/update/"+id, { // Use the correct endpoint with the user ID in the URL
      method: "PUT", // Use PUT method for updating user data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        phoneNumber,
        email,
        address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: 'Something went wrong. Please try again.',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Update Successful',
            text: 'Your information has been updated!',
          }).then(() => {
            setIsOpenSignUp(false);
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Something went wrong. Please try again.',
        });
        console.log(error);
      });
  }
  

  if (userData == null) {
    const uData = JSON.parse(localStorage.getItem('userData'));
    userData = {
      userName: uData.userName,
    };
  }
//log out
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  
  // popup
  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const openPopupSignUp = () => {
    setIsOpenSignUp(true);
  };

  const closePopupSignUp = () => {
    setIsOpenSignUp(false);
  };
  
    return(
        <nav>
                <ul style={{width:'80vw', float:'left'}}>
                  <li><img src={images.Logo} alt='logo' className='logoNav'/></li>
                  <li className="dropdown" style={{marginLeft:'8vw'}}>
                        <a href='/'><button className="dropbtn">Home 
                        </button></a>
                  </li>
                    <li className="dropdown">
                        <button className="dropbtn">Waste Management 
                        </button>
                        <div className="dropdown-content">
                          <a href="/organic">organic</a>
                          <a href="/inorganic">inorganic</a>
                        </div>
                      </li>
                      <li className="dropdown">
                       <a href='/myResources'><button className="dropbtn">Recycling Education
                        </button></a> 
                      </li>
                      <li className="dropdown">
                        <button className="dropbtn">Product Listing 
                        </button>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#contactUS"><button className="dropbtn">Contact Us
                        </button></a>
                  </li>
                  <li className="dropdown">
                  <a href="#aboutUS"><button className="dropbtn">About Us 
                        </button></a>
                  </li>
                </ul>
                <a style={{float:'right',width:'10vw', marginTop:'1vw'}} onClick={openPopup}>
                <h6 style={{width:'4vw', fontSize:'12px', fontWeight:800,color:'#3AF481',padding:'1vw',textTransform: 'uppercase',float:'left'}}>{userData.userName}</h6>
                <img src="https://www.w3schools.com/w3css/img_avatar.png" alt='profile'style={{width:'3vw',float:'right',border:'1px solid black',borderRadius:'1.5vw'}}/> 
                </a>
              {isOpen && (
            <div className="popup">
              <div className="popup-content">
              <h2 style={{float:'left'}}>Profile</h2>
                <button className="closeBtn" onClick={closePopup}><FontAwesomeIcon icon={faXmark} /></button>
                <br/>
                <h4 style={{width:'4vw', fontWeight:800,color:'black',padding:'0.2vw',textTransform: 'uppercase'}}>{userData.userName}</h4>
                <img src="https://www.w3schools.com/w3css/img_avatar.png" alt='profile'style={{width:'5vw',border:'1px solid black',borderRadius:'2.5vw', marginLeft:'3vw'}}/>
                <h5 style={{fontWeight:500,color:'#808080'}}><FontAwesomeIcon icon={faEnvelope} /> {userData.email}</h5>
                <h5 style={{fontWeight:500,color:'#808080'}}><FontAwesomeIcon icon={faPhone} /> {userData.phoneNumber}</h5>
                <button className='editBtn-p' onClick={openPopupSignUp}><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button className='logoutBtn' onClick={logOut}><FontAwesomeIcon icon={faRightFromBracket} /></button>
              </div>
            </div>
          )}
          {isOpenSignUp && (
            <div className="popupSign">
              <div className="popup-contentSignUp" style={{height:'35vw'}}>
                <center>
                  <button className="closeBtn" onClick={closePopupSignUp}> <FontAwesomeIcon icon={faXmark} /> </button>
                    <h3 style={{marginTop:'1vw',fontFamily:'monospace', fontWeight:'bold'}}>Profile Update</h3>
                    <div className='signBox'>
                    <form  onSubmit={onSubmit}>
                        <h6 className='mail'><FontAwesomeIcon icon={faUser} /> User Name</h6>
                        <input type='text' 
                        placeholder=' Thomas'
                        className='input-sign'
                        id='userName'
                        name='userName'
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        /><br/>

                        <h6 className='mail'><FontAwesomeIcon icon={faEnvelope} /> E-mail</h6>
                        <input type='text' 
                        placeholder=' xxx@x.com' 
                        className='input-sign'
                        id='email'
                        name='email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/>
                        <h6 className='mail'><FontAwesomeIcon icon={faPhone} /> Phone</h6>
                        <input type='text' 
                        placeholder=' 07X XXX XXXX'
                        className='input-sign'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        /><br/>

                        <h6 className='mail'><FontAwesomeIcon icon={faMapLocationDot} /> Address</h6>
                        <input type='text' 
                        placeholder=' 195, Galle Road, Colombo 03' 
                        className='input-sign'
                        id='address'
                        name='address'
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                        /><br/>
                        <button className='btnSign' name="submit">Update <FontAwesomeIcon icon={faCircleCheck} /></button>
                        </form>
                    </div>
                </center>
              </div>
            </div>
          )}
      </nav>

    )
};
export default HeaderS;