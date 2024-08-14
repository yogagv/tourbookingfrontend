import React, { useContext, useState } from 'react'
import './tourreview.css'
import { AuthContext } from '../Context/AuthContext'
import {  useParams } from 'react-router-dom'
import { BASE_URL, token } from '../utils/config'
import ReactStars from 'react-stars';
import GetReview from '../GetReview/GetReview'



const TourReview = ({ tour }) => {

    const [tourReview, setTourReview] = useState({

        review: '',
        rating: 0
    
      })

      console.log(typeof review)

      const { user } = useContext(AuthContext);


      const handleReviewChange = (e) => {

        setTourReview((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    }

    const handleRatingChange = (newRating) => {

      setTourReview((prev) => ({ ...prev, rating: newRating }));

  }

    const { id } = useParams();

    const handleReviewSubmit = async (e) => {

        e.preventDefault();


        try {

            if (!user || user === undefined || user === null) {
                return alert('Please sign in')
            }
                

              const res = await fetch(`${BASE_URL}/review/tourreview/${id}`, {
              method: "POST",
              headers: {
                  "Content-type": "application/json",
                  Authorization: `Bearer ${token}`, 
              },
              body: JSON.stringify(tourReview),                
            });

            console.log(res);

            console.log("Token being sent:", token);

            const result = await res.json();
            if (!result.ok) {
              console.log(result.message);
            }
            alert('Your review Submitted')
          } catch (error) {
            console.log(error.message);
          }
    }


  return (
    <div>
         <h4 className='mt-4'>Reviews ({tour.ratingsQuantity})</h4>
                      <form className='mt-5' onSubmit={handleReviewSubmit}>
                        <span className='userrating' >
                        <ReactStars
                         count={5} 
                         size={30}
                         value={tourReview.rating}
                         onChange={handleRatingChange} />
                        </span>
                      <textarea placeholder="Write a comment..." id='review' className='review-input' onChange={handleReviewChange}/>
                      <button type="submit" className='review-button'>Submit</button>
                      </form>
                      <div className="review-list mt-5">
                        <GetReview tour = {tour}/>
      </div>
    </div>
  )
}

export default TourReview