import React from 'react'
// import { Link } from 'react-router-dom'
import './featuredtour.css'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import Loading from '../Loading/Loading'

const FeaturedTour = () => {

    const {
        data: tourData,
        loading,
        error,
    } = useFetch(`${BASE_URL}/tour/search/tourByFeatured/true`);

  return (
    <div>

        <div className="container mt-5">
        <p className='fst-italic mt-5 text-dark explore'>Explore</p>
        <h3 className='mt-3'>Our featured tours</h3>

            {loading && <h1>{<Loading/>}</h1>}
            {error && <h1>Error</h1>}
            {
                !loading && !error && (
                  <div className="container mt-5">
                    <div className="row ">
                        {
                tourData?.map((tour) => (
        //   
        <div className="col-md-3 xs-4" key={tour.id}>
        <Card style={{ width: '18rem', height: '24rem' }}>
      <Card.Img variant="top" width={127} height={286} src= {tour.image}/>
      <div class="featured-text">Featured</div>
      <Card.Body>
        <Card.Title>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
              <span className='searchinput'>
              <CiLocationOn /></span><Link to={tour._id} className='text-decoration-none text-dark'>{tour.city}</Link>
              </div>
              <div className="col-md-6">
              <span className='searchinput'>
              <CiStar /></span><span className='fw-normal mt-5 fs-6'>{tour.rating} ({tour.ratingsQuantity})</span>
              </div>
            </div>
          </div>
          </Card.Title>
        <Card.Title><Link to={tour._id} className='text-decoration-none text-dark'>{tour.title}</Link></Card.Title>
        <Card.Text>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
        <span className='fw-bold text-warning fs-4'>$</span><span className='fw-bold text-warning fs-4'>{tour.price}
          </span><span className='fw-medium text-secondary fs-5'>/per person</span>
        </div>
        <div className="col-md-6">
        <Link to={tour._id} className="btn btn-warning w-100 mb-3 mt-4">Book Now</Link>
        </div>
        </div>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          ))          
        }
          </div>
        </div>
        )
    }
      </div>
    
    </div>
  )
}

export default FeaturedTour