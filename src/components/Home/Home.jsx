import React from 'react'
import world from '../../assets/images/world.png'
import hero1 from '../../assets/images/hero-img01.jpg'
import hero3 from '../../assets/images/hero-img02.jpg'
import weather from '../../assets/images/weather.png'
import guide from '../../assets/images/guide.png'
import customization from '../../assets/images/customization.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiPinDistanceLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import FeaturedTour from '../FeaturedTour/FeaturedTour'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/config'
import Experience from '../Experience/Experience'
import Gallery from '../Gallery/Gallery'
import Testmonials from '../Testimonials/Testmonials'
import './home.css'

const Home = () => {

  const [search, setSearch] = useState({

    city: "", 
    distance: "", 
    maxGroupSize: ""

})


  const navigate = useNavigate();


  const handleChange = (e) => {

    setSearch((prev)=> ({ ...prev, [e.target.id]: e.target.value}));

  }


  
  const handleSubmit = async(e) => {

    e.preventDefault();


    const {city, distance, maxGroupSize} = search;


    if(!city === "" || distance === 0 || maxGroupSize === 0 ){

       alert('Fill all the Fields')

       return;
  }

    
      try {
      const res = await fetch(`${BASE_URL}/tour/search/tourBySearch?city=${city}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{
        method:"GET",
      });

      console.log(res);
      const result = await res.json();
      console.log("Fetch Result:", result);
      setSearch(result)

      const tourres = result.data[0];
      console.log(tourres)

      if(!result.data || result.data.length === 0) {

        navigate('/tourfiltererror');
      }

      else if( tourres.city !== city || tourres.distance !== distance || tourres.maxGroupSize !== maxGroupSize )
       
      {
        console.log(typeof result.city);

        navigate('/tourfiltererror');

      }

        navigate(`/tour/filter/${city}`);

    } catch(error){

      console.log(error.message)
      
    }      
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 heropara mt-5">
              <p className='fst-italic mt-5'><span className='hero-para'> Know before you go</span>
              <span></span><span><img src={world} alt="world" /></span></p>
              <h2 className='fs-1'><span>Travelling opens</span><br/> the doors to <br/>  creating <span className='memory'> memories </span></h2>
              <p className='mt-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In vel quam nec felis maximus hendrerit. 
                Aliquam hendrerit orci eu felis varius vestibulum. 
                Aenean ullamcorper metus metus, quis posuere quam dictum vitae. 
                Integer dignissim velit id lectus pellentesque dictum. 
                Ut nec malesuada ligula.</p>
          </div>
          <div className="col-md-6 mt-5">
            <div className="continer mt-5">
            <div className="row">
            <div className="col-md-4 mt-2 hero-image">
              <img src={hero1} alt="hero1" />
            </div>
            <div className="col-md-4 mt-4 hero-image">
                <video src={"https://videos.pexels.com/video-files/4762374/4762374-uhd_1440_2732_24fps.mp4"} className='object-fit-cover' alt="hero2" controls/>
            </div>
            <div className="col-md-4 mt-5 hero-image">
                <img src={hero3} alt="hero3" />
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div className="container">
        <div className="row">
          <div className="col-md-9">
            <form className='searchform'  onSubmit={handleSubmit}>
              <div className="row">
              <div className="col-md-3 line">
               <h6><span className='searchinput-icon'>
               <FaMapMarkerAlt /> </span>
                 <span className='searchinput-name'>Location</span></h6>
                  <input type="text" placeholder='where are you going?' id='city' onChange={handleChange}/>
              </div>
              <div className="col-md-3 line">
              <h6><span className='searchinput-icon'>
              <RiPinDistanceLine /> </span>
                 <span className='searchinput-name'>Distance</span></h6>
                  <input type="text" placeholder='Distance k/m' id='distance' onChange={handleChange}/>
              </div>
              <div className="col-md-3 line">
                <h6><span className='searchinput-icon'>
                 <IoPeople /> </span>
                  <span className='searchinput-name'>Max People</span></h6>
                  <input type="text" placeholder='0' id='maxGroupSize' onChange={handleChange}/>
                </div>
                <div className="col-md-3 w-5">
                 <button className="btn btn-warning w-30 searchinput-iconsearch mt-3 ms-3"><FaSearch /></button>
                  </div>
              </div>
            </form>
          </div> 
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
        <div className="col-md-3">
            <p className='fst-italic text-danger'>What we serve</p>
            <h1 className='mt-4'>We Offer Our best services</h1>
        </div>
        <div className="col-md-3 weather">
          <img src={weather} alt="weather"/>
          <h5 className='mt-3'>Calculate Weather</h5>
          <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Maecenas imperdiet laoreet elit, at dapibus quam rhoncus et. 
          Aliquam lectus ex, feugiat eget neque vel, hendrerit bibendum orci.</p>
        </div>
        <div className="col-md-3 weather">
        <img src={guide} alt="weather"/>
        <h5 className='mt-3'>Best tour guide</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet laoreet elit, at dapibus quam rhoncus et. 
        Aliquam lectus ex, feugiat eget neque vel, hendrerit bibendum orci.</p>
        </div>
        <div className="col-md-3 weather">
        <img src={customization} alt="weather"/>
        <h5 className='mt-3'>Customization</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet laoreet elit, at dapibus quam rhoncus et. 
        Aliquam lectus ex, feugiat eget neque vel, hendrerit bibendum orci.</p>
        </div>
        </div>
        </div>
            <FeaturedTour/>
            <Experience />
            <Gallery />
            <Testmonials />
        
            </div>
  )
}

export default Home