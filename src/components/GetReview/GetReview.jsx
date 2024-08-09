import React from 'react'
import avatar from '../../assets/images/avatar.jpg'
import './getreview.css'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { useParams } from 'react-router-dom'

const GetReview = ({tour}) => {

    const { id } = useParams();

    const {

        data : tourData,
        loading,
        error,
    } = useFetch(`${BASE_URL}/review/getReview/${id}`);

    const getLatestReview = (review) => {
      if (!review || review.length === 0) return null;     
      const sortedReviews = review.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return sortedReviews[0];
    }
      const latestReview = getLatestReview(tourData);

  return (
    <div>
            {loading && <h1>Loading</h1>}
            {error && <h1>Error</h1>}
            {!latestReview ? (
                <p>No reviews yet.</p>
            ) : (
                <div className='latest-review'>
                    <img src={avatar} className='avatar' alt="" />
                    <strong>{latestReview.name}</strong> - {latestReview.reviewText} ({latestReview.rating})
                </div>
            )}
        </div>
  )
}


export default GetReview