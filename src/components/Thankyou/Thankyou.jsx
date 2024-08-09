import React from 'react'
import './thankyou.css'
import { SiTicktick } from "react-icons/si";
import { Link } from 'react-router-dom';

const Thankyou = () => {

  return (
    <div>
        <div className="div mt-5">
        <span className='tick'><SiTicktick size={50}/></span>
        <h4 className='mt-3'>Your tour Booked Successfully!...</h4>
        <h5 className='mt-2 ms-3'>To redirect to tour page 
        <Link to="/tour" className='text-decoration-none text-warning'> Click here</Link></h5>
        </div>
    </div>
  )
}

export default Thankyou