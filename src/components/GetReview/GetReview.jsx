import React from 'react'
import avatar from '../../assets/images/avatar.jpg'
import './getreview.css'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { useParams } from 'react-router-dom'

const GetReview = ({tour}) => {

    const { id } = useParams();

    const {

        data : tourReview,
        loading,
        error,
    } = useFetch(`${BASE_URL}/review/getReview/${id}`);

  return (
    <div>
        {loading && <h1>Loading</h1>}
        {error && <h1>Error</h1>}
        {
        Object.values(tourReview).length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {
            Object.values(tourReview).map((review) => (
              <li key={review._id} className='list'>
                <img src={avatar} className='avatar' alt="" />
                <strong>{review.name}</strong> - {review.review} ({review.rating})
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default GetReview