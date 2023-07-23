import React,{useState} from 'react';
import images from '../../constant/images';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Headera from '../home/header';
import Footer from '../home/footer';

const SignIn =()=>{
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
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
          window.location.href="./sign-in"
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

    return(
        <div className='container-c'>
          <div style={{backgroundColor:'black'}}>
            <Headera/></div>
            <div className='lgnBox-sign'>
                 <img src={images.Signup1} alt='login' className='sign-a'/>
                   <div className='lgnData-a'>
                     
                       <h3 className='lgnhd-sign'>Sign Up</h3>
                       <form  onSubmit={handleSubmit}>

                       <h6 className='mail'>User Name</h6>
                       <input type='text' 
                       placeholder='Enter Your User Name'
                       className='in'
                       value={userName} 
                       onChange={(e) => setUserName(e.target.value)}
                       /><br/>

                       <h6 className='mail'>E-mail</h6>
                       <input type='text' 
                       placeholder='E-mail Address' 
                       className='in'
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}
                       />
                       <br/>
                       <h6 className='mail'>Phone</h6>
                       <input type='text' 
                       placeholder='Phone number'
                       className='in'
                       value={phoneNumber} 
                       onChange={(e) => setPhoneNumber(e.target.value)}
                       /><br/>

                       <h6 className='mail'>Address</h6>
                       <input type='text' 
                       placeholder='Address' 
                       className='in'
                       value={address} 
                       onChange={(e) => setAddress(e.target.value)}
                       /><br/>

                       <h6 className='mail'>Password</h6>
                       <input type='text' 
                       placeholder=' Password' 
                       className='in'
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       /><br/>

                       <button className='btnSign' type="submit">Sign Up</button>
                       </form>
                       
                        
                   </div>   
               </div>
               <Footer/>
        </div>
        )
    };
    export default SignIn;