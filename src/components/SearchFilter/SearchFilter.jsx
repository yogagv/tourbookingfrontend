import React, { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiPinDistanceLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';
import { IoPeople } from "react-icons/io5";
import './searchfilter.css'

const SearchFilter = ({tourSearch}) => {
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

          const tourres = result.data[0];
          console.log(tourres)

          if(!result.data || result.data.length === 0) {

            navigate('/tourfiltererror');
          }

          else if( tourres.city !== city || tourres.distance !== distance || tourres.maxGroupSize !== maxGroupSize )
           
          {

            navigate('/tourfiltererror');
    
          }
    
            navigate(`/tour/filter/${city}`);
    
        } catch(error){
    
          console.log(error.message)
          
        }      
      }

  return(
    <div>
        
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
                 <button className='search'><span className='searchinput-iconsearch' type='search'>
                 <FaSearch /></span></button>
                  </div>
              </div>
            </form>
          </div> 
        </div>
      </div>

    </div>
  )
}

export default SearchFilter