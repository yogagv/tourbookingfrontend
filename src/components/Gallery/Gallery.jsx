import React from 'react'
import gallery1 from '../../assets/images/gallery-01.jpg'
import gallery2 from '../../assets/images/gallery-02.jpg'
import gallery3 from '../../assets/images/gallery-03.jpg'
import gallery4 from '../../assets/images/gallery-04.jpg'
import gallery5 from '../../assets/images/gallery-05.jpg'
import gallery6 from '../../assets/images/gallery-06.jpg'
import gallery7 from '../../assets/images/gallery-07.jpg'
import gallery8 from '../../assets/images/gallery-08.jpg'
import './gallery.css'

const Gallery = () => {
  return (
    <div>
        <div className="container mt-5">
        <p className='fst-italic mt-5 text-dark experience'>gallery</p>
        <h2 className='mt-1'>Visit our customers tour gallery </h2>
        <div className="row">
        <div className="col-md-12 mt-5">
            <div className="continer">
            <div className="row">
            <div className="col-md-3 hero-image ">
              <img src={gallery1} alt="hero1" className='border-0 hero_one' />
              <img src={gallery5} alt="hero1" className='mt-4 border-0 hero_five' />
            </div>
            <div className="col-md-3 hero-image">
                <img src={gallery2} alt="hero1" className='h-25 border-0 hero_two'  />
                <img src={gallery6} alt="hero1" className='h-25 mt-4 border-0 hero_six' />
            </div>
            <div className="col-md-3 hero-image">
                <img src={gallery3} alt="hero3" className='border-0 hero_three' />
                <img src={gallery7} alt="hero3" className='mt-4 border-0 hero_seven' />
            </div>
            <div className="col-md-3 hero-image">
                <img src={gallery4} alt="hero3" className='h-25 border-0 hero_four' />
                <img src={gallery8} alt="hero3" className='h-50 mt-4 border-0 hero_eight' />
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Gallery