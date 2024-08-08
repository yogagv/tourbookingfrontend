import React, { useContext, useState } from 'react'
import './booking.css'
import { Authcontext } from '../Context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, token } from '../utils/config'


export const Booking = ({ tour }) => {

    const [booking, setBooking] = useState({

        fullname: '',
        phone: '',
        bookAt: '',
        guestSize: 0

    })

    const { user } = useContext(Authcontext);
    const navigate = useNavigate();


    const handleChange = (e) => {

        setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }))

    }

    const { id } = useParams();

    const handleSubmit = async (e) => {

        e.preventDefault();



        try {

            if (!user || user === undefined || user === null) {
                return alert('Please sign in')
            }
                

            const res = await fetch(`${BASE_URL}/booking/tourbooking/${id}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`, 
                },
                body: JSON.stringify(booking),
                
            })

            console.log("Token being sent:", token);

            const result = await res.json();
            if (!result.ok) {
              console.log(result.message);
            }
            navigate(`/thankyou`);
          } catch (error) {
            console.log(error.message);
          }
    }

    const serviceFee = 10;
    const totalAmount = Number(tour.price) * Number(booking.guestSize) + Number(serviceFee)
    const bookingAmount = Number(tour.price) * Number(booking.guestSize)


    return (

        <>
            <div className="userinfo">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Full Name' id='fullName' onChange={handleChange} className='ms-2 mt-4' />
                    <input type="text" placeholder='Phone Number' id='phone' onChange={handleChange} className='ms-2 mt-4' />
                    <input type="date" placeholder='dd-mm' id='bookAt' onChange={handleChange} className='ms-2 mt-4' />
                    <input type="text" placeholder='No of person' id='guestSize' onChange={handleChange} className='ms-2 mt-4' />

                    <div className='bookingdetails'>
                        <span className='mt-5'> {tour.price} * {booking.guestSize} person</span> <span className='bookingamt'> {bookingAmount}</span>
                        <p className='mt-2'>Service charges<span className='bookingfee'> {serviceFee} </span></p>
                        <h6>Total <span className='totalamt'> {totalAmount} </span></h6>
                        <button className="btn btn-warning w-100 mt-4" > Book Now</button>
                    </div>
                </form>
            </div>
        </>
    )
}
