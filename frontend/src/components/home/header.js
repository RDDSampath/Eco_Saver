import React,{useState} from 'react';
import images from '../../constant/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark,faEyeSlash,faEye,faUser,faEnvelope,
  faPhone,faMapLocationDot,faLock,faCircleCheck,faArrowRightToBracket
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Header =()=>{
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  //Sign Up
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  //Log in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(false);

  const showPass = () => {
    setIsShowPass(true);
  };
  const hidePass = () => {
    setIsShowPass(false);
  };

  const openPopupSignIn = () => {
    setIsOpenSignIn(true);
  };

  const closePopupSignIn = () => {
    setIsOpenSignIn(false);
  };

  const openPopupSignUp = () => {
    setIsOpenSignUp(true);
  };

  const closePopupSignUp = () => {
    setIsOpenSignUp(false);
  };

  const signUpPopUp = () => {
    setIsOpenSignIn(false);
    setIsOpenSignUp(true);
  };
    
  // Sign up
  function handleSubmitSignUp(e) {
    e.preventDefault();

    fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        phoneNumber,
        email,
        address,
        password,
        userType: "user",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          alert(data.error);
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'Thank you for registering!',
          }).then(() => {
          setIsOpenSignUp(false);
          setIsOpenSignIn(true);
          // redirect to login page
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Something went wrong. Please try again.',
        });
        console.log(error);
      });
  }
  

  //Login
  function handleSubmitSignIn(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("/user/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome back!',
          }).then(() => {
            window.localStorage.setItem('token', data.data);
            window.localStorage.setItem('loggedIn', true);
            window.location.href = './userDetails';
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid credentials. Please try again.',
          });
        }
      });
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
            <button onClick={openPopupSignIn} className="dropbtn">Waste Management 
            </button>
          </li>
          <li className="dropdown">
            <button onClick={openPopupSignIn} className="dropbtn">Recycling Education
            </button>
          </li>
          <li className="dropdown">
            <button onClick={openPopupSignIn} className="dropbtn">Product Listing 
            </button>
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
    <button className='signIN' onClick={openPopupSignIn}>Sign in</button>
    <button className='signUP' onClick={openPopupSignUp}>Sign up</button>
      {isOpenSignIn && (
            <div className="popupSign">
              <div className="popup-contentSign">
              <button className="closeBtn" onClick={closePopupSignIn}> <FontAwesomeIcon icon={faXmark} /> </button>
                <center>
                <h3>Sign in</h3>
                <div className='signBox'>
                <form onSubmit={handleSubmitSignIn}>
                  <h5 className='mail'>*Email Address</h5>
                    <input type='text' 
                       placeholder='example@mail.com'
                       className='input-sign'
                       value={email} onChange={(e) => setEmail(e.target.value)}
                       />
                  <h5 className='mail'>*Password</h5>
                    <input 
                        type={isShowPass ?'text':'password'} 
                        placeholder='Abc@123' 
                        className='input-sign'
                        style={{width:'18vw'}}
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        {isShowPass ?<a onClick={hidePass}><FontAwesomeIcon  className='passShow-p' icon={faEye} /> </a>:<a onClick={showPass}><FontAwesomeIcon  className='passShow-p' icon={faEyeSlash} /></a>}
                        
                    <button type='submit' style={{marginBottom:'1vw'}}>Sign In <FontAwesomeIcon icon={faCircleCheck} /></button><br/>
                    <h6>forgot password ? here</h6>
                    <a onClick={signUpPopUp} style={{textDecoration:'none',cursor:'pointer',alignItems:'center',justifyContent:'center', marginTop:'1vw'}}><h6>sign up <FontAwesomeIcon icon={faArrowRightToBracket} /></h6></a>
                </form>
                </div>
                </center>
              </div>
            </div>
          )}
          {isOpenSignUp && (
            <div className="popupSign">
              <div className="popup-contentSignUp">
                <center>
                  <button className="closeBtn" onClick={closePopupSignUp}> <FontAwesomeIcon icon={faXmark} /> </button>
                    <h3 style={{marginTop:'1vw',fontFamily:'monospace', fontWeight:'bold'}}>Register</h3>
                    <div className='signBox'>
                    <form  onSubmit={handleSubmitSignUp}>
                        <h6 className='mail'><FontAwesomeIcon icon={faUser} /> User Name</h6>
                        <input type='text' 
                        placeholder=' Thomas'
                        className='input-sign'
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        /><br/>

                        <h6 className='mail'><FontAwesomeIcon icon={faEnvelope} /> E-mail</h6>
                        <input type='text' 
                        placeholder=' xxx@x.com' 
                        className='input-sign'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/>
                        <h6 className='mail'><FontAwesomeIcon icon={faPhone} /> Phone</h6>
                        <input type='text' 
                        placeholder=' 07X XXX XXXX'
                        className='input-sign'
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        /><br/>

                        <h6 className='mail'><FontAwesomeIcon icon={faMapLocationDot} /> Address</h6>
                        <input type='text' 
                        placeholder=' 195, Galle Road, Colombo 03' 
                        className='input-sign'
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                        /><br/>

                        <h6 className='mail'><FontAwesomeIcon icon={faLock} /> Password</h6>
                        <input type='password' 
                        placeholder=' XXXXXXXXXX' 
                        className='input-sign'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        /><br/>

                        <h6 className='mail'><FontAwesomeIcon icon={faLock} /> Confirm Password</h6>
                        <input type='password' 
                        placeholder=' XXXXXXXXXX' 
                        className='input-sign'
                        /><br/>

                        <button className='btnSign' type="submit">Sign Up <FontAwesomeIcon icon={faCircleCheck} /></button>
                        </form>
                    </div>
                </center>
              </div>
            </div>
          )}
  
</nav>
    )
};
export default Header;