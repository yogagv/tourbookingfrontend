import React from 'react'
import experience from '../../assets/images/experience.png'
import './experience.css'

const Experience = () => {
  return (
    <div>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
        <p className='fst-italic mt-5 text-dark experience'>Experience</p>
        <h2 className='mt-5 fs-1'>With our all experience <br/> we will serve you!</h2>
        <p className='mt-4 experience-text'>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Maecenas imperdiet laoreet elit, at dapibus quam rhoncus et. 
        Aliquam lectus ex, feugiat eget neque vel</p>
        <div className="row mt-5">
          <div className="col-md-4">
            <h4 className='rating'>12k+</h4>
            <p className='ms-3'>Successful Trips</p>
          </div>
          <div className="col-md-4">
          <h4 className='rating'>2k+</h4>
          <p className='ms-3'>Regular Clients</p>
          </div>
          <div className="col-md-4">
          <h4 className='rating'>15</h4>
          <p className='ms-3'>Years Experience</p>
          </div>
        </div>
        </div>
        <div className="col-md-6 mt-5">
            <img src={experience} alt="experience" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Experience