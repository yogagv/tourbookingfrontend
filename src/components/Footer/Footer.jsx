import React, { useState } from 'react'
import logo from '../../assets/images/logo-white.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import maletourist from '../../assets/images/male-tourist.png';
import emailjs from '@emailjs/browser';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

  const [email, setEmail] = useState('')

  const handleChange = (e) => {

    setEmail((prev)=> ({ ...prev, [e.target.id]: e.target.value}));
  }
  
  const handleSubmit = (e) => {

      e.preventDefault();

  }

  const serviceId = 'service_y46mqkn';
  const templateId = 'template_nbmjhgo';
  const publicKey = '19kVTUMBE9SMtfr-b';


  const templateParams = {

    from_email: email,
    to_name:'MayurasTours'
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response)=>{
    console.log('Email sent successfully', response);
    setEmail('');
  })
  .catch((error)=>{
    console.log(error.message);
  })

  
  
  return (
    <div>
    <div className='footer_one'>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-5">
              <h2>Subscribe now for <br/> Useful travelling information.</h2>
              <form onSubmit={handleSubmit}>
              <input type="text"  placeholder='Enter your Email' className="subscribe-input mt-3" id='email' onChange={handleChange}/>
              <input type='submit' className="subscribe-button" placeholder='Subscribe'/>
              </form>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
              Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. </p>
          </div>
          <div className="col-md-6 mt-3">
              <img src={maletourist} alt="maletourist" />
          </div>
        </div>
      </div>

    <div className='bg-body-tertiary mt-5'>
    <div className="container">
    <div className="col-md-12">
      <div className="row">
      <div className="col-md-3 tourfooter">
          <img src={logo} alt="logo" className='mt-5'/>
          <p className='lh-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed maximus euismod sapien at condimentum. Donec fermentum erat laoreet est viverra, 
            ut mollis felis fringilla.</p>
            <FaGithub /> <span className='ms-1'><FaInstagram /></span> <span className='ms-1'><FaLinkedinIn /></span><span className='ms-1'> <TiSocialFacebook /></span>
            <span className='ms-1'><FaXTwitter /></span>
      </div>
      <div className="col-md-3 mt-5">
      <h4>Discover</h4>
      <h6 className='mt-4'>
      <Link to="/" className='text-decoration-none text-secondary fw-normal'>Home</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/about" className='text-decoration-none text-secondary fw-normal mt-5'>About</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/tour" className='text-decoration-none text-secondary fw-normal mt-5'>Tours</Link>
      </h6>
      </div>
      <div className="col-md-3 mt-5">
      <h4>Quick Links</h4>
      <h6 className='mt-4'>
      <Link to="/gallery" className='text-decoration-none text-secondary fw-normal'>Gallery</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/signin" className='text-decoration-none text-secondary fw-normal mt-5'>Login</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/register" className='text-decoration-none text-secondary fw-normal mt-5'>Register</Link>
      </h6>
      </div>
      <div className="col-md-3 mt-5">
      <h4> Contact</h4>
      <h6 className='mt-4  text-dark'>
        <span className='contact'><FaMapMarkerAlt/>  </span>   
         Address: <span className='text-secondary fw-noraml'>Shimoga, Karnataka</span>
      </h6>
      <h6 className='mt-4  text-dark'>
      <span className='contact'><MdEmail />  </span>   
         Email: <span className='text-secondary fw-normal'>ait96@gmail.com</span>
      </h6>
      <h6 className='mt-4  text-dark'>
      <span className='contact'><FaPhone />  </span>   
         Contact: <span className='text-secondary fw-normal'>+91 90989 70459</span>
      </h6>
      </div>
    </div>
    </div>
    </div>
    <div className="container">
    <div className="col-md-12 mt-5">
        <h6 className='text-center text-secondary fw-normal'>Copyright 2024, Design and developed by Yogananthan. All rights reserved.</h6>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer