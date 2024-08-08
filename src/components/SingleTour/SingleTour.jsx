import React from 'react'
import {  useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { CiStar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import { RiMapPinTimeLine } from "react-icons/ri";
import { BASE_URL } from '../utils/config';
import './singletour.css'
import { Booking } from '../Booking/Booking';
import TourReview from '../TourReview/TourReview';

const SingleTour = () => {


    const { id } = useParams();
    
    const {

        data : tour,
        loading,
        error,
    } = useFetch(`${BASE_URL}/tour/getSingleTour/${id}`);



  return (
    <div>

{loading && <h1>Loading</h1>}
    {error && <h1>Error</h1>}

    {

        !loading && !error && (
          <>
            <div className='container'>
            <div className="row">
                  <div className="col-md-9 mt-5">
                    <img src={tour.image} className='tourimage' alt="" />
                  </div>
                  <div className="col-md-3 mt-5 tourinfo">
                    <div className="mt-5">
                  <span className='fw-bold fs-4'>$</span><span className='fw-bold fs-4'>{tour.price}
                  </span><span className='fw-normal text-secondary fs-5'>/per person</span> 
                  <span className='searchinput'>  <CiStar /></span><span className='fw-normal mt-5 fs-6'>{tour.rating}({tour.ratingsQuantity})</span>
                  <hr />
                  </div>
                    <h5 className='mt-5'>Information</h5>
                    <Booking tour = {tour}/>
                </div>
                  </div>
                </div>
                    <div className="container">
                      <div className="row">
                    <div className='tourdata col-md-8 ms-2'>
                      <h4 className='mt-4'>{tour.title}</h4>
                      <div className='mt-4'>
                     <span className='star'><CiStar /></span> <span className='fw-normal mt-5 ms-1 fs-6'>{tour.rating}</span> <span className='ms-5'><IoLocation /> {tour.address}</span>
                     </div>
                     <div className='mt-4'>
                     <span><CiLocationOn /> {tour.city}</span> <span className='ms-5'><HiOutlineCurrencyRupee /> {tour.price} per person</span>
                     <span className='ms-5'><RiMapPinTimeLine /> {tour.distance} k/m</span>
                     <span className='ms-5'><GoPeople /> {tour.maxGroupSize} people</span>
                     </div>
                     <div className='mt-5'>
                        <h5>Description</h5>
                        <span className='mt-5'>{tour.desc}</span>
                     </div>
                      </div>
                    </div>
                    </div>
                    <div className="container">
                      <div className="row">
                    <div className='tourreview col-md-8 mt-4 ms-2'>
                    <TourReview tour = {tour}/>
                    </div>
                    </div>
                    </div>
                  </>
               
                )
              }

    </div>
  )
}

export default SingleTour