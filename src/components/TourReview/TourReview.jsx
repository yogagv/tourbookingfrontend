import React, { useContext, useState } from 'react'
import './tourreview.css'
import { Authcontext } from '../Context/AuthContext'
import {  useParams } from 'react-router-dom'
import { BASE_URL, token } from '../utils/config'
import ReactStars from 'react-stars';
import GetReview from '../GetReview/GetReview'


const TourReview = ({ tour }) => {

    const [review, setReview] = useState([{

        review: '',
        rating: 0
    
      }])

      console.log(typeof review)

      const { user } = useContext(Authcontext);


      const handleReviewChange = (e) => {

        setReview((prev) => ({ ...prev, [e.target.id]: e.target.value }));

        setReview(review);

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
              body: JSON.stringify(review),
                
            })

            console.log("Token being sent:", token);

            const result = await res.json();
            if (!result.ok) {
              console.log(result.message);
            }
            alert('Your review Submitted')
            setReview(result);

          } catch (error) {
            console.log(error.message);
          }
    }


  return (
    <div>
         <h4 className='mt-4'>Reviews ({tour.ratingsQuantity} reviews)</h4>
                      <form className='mt-5' onSubmit={handleReviewSubmit}>
                        <span className='userrating' >
                        <ReactStars
                         count={5} 
                         size={30}
                         onChange={handleReviewChange}/> 
                        </span>
                      <textarea placeholder="Write a comment..." className='review-input' onChange={handleReviewChange}/>
                      <button type="submit" className='review-button'>Submit</button>
                      </form>
                      <div className="review-list mt-5">
                        <GetReview review = {review}/>
      </div>
    </div>
  )
}

export default TourReview