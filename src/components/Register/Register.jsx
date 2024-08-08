import React, { useState } from 'react'
import register from '../../assets/images/register.png'
import user from '../../assets/images/user.png'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/config'

const Register = () => {

  // const [credentials, setCredentials] = useState({

  //   name: undefined,
  //   email: undefined,
  //   password: undefined,
  //   phone: undefined

  // })

  // const navigate = useNavigate();

  // const handleChange = (e) => {

  //   setCredentials((prev)=>({...prev, [ e.target.id]: e.target.value}))

  // } 

  // const handleSubmit = async (e) => {

  //       e.preventDefault();

  //       try{

  //         const res = await fetch(`${BASE_URL}/auth/registerUser`, {
  //           method: "POST",
  //           headers: {"Content-type":"application/json"} ,
  //           body: JSON.stringify(credentials)
  //           });

  //         const result = await res.json()

  //         if(!result.ok){

  //           console.log(result.message)
            
  //         }

  //         navigate("/signin")

  //       }catch(error){

  //         console.log(error)

  //       }
  // }


  const [credentials, setcredentials] = useState({

    name: undefined,
    email: undefined,
    password: undefined,
    phone: undefined
  })

  const navigate = useNavigate();

  const handleChange = (e) => {

      setcredentials((prev)=>({...prev, [e.target.id]: e.target.value}))
  }

  const handleSubmit = async(e) => {

      e.preventDefault();

      try{

        const res = await fetch(`${BASE_URL}/auth/registerUser`, {
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify(credentials),
        });

        const result = await res.json()
        if(!result.ok) {
          console.log(result.message)
        }

          navigate('/signin');

      }catch(error){
        console.log(error.message)
      }
  }

  return (
    <div>
      <div className="container ">
      <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6 mt-5 register">
              <div className="row">
              <div className="col-md-6">
              <img src={register} alt="register"/>
                </div>
              <div className="col-md-6 registeruser">
                <div className="row">
                  <div className="col-md-2">

                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <img src={user} alt="user"/>
                      <h3 className='text-white mt-2 ms-5'>Register</h3>
                      <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 mt-2 ">
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="input"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="input"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    pattern="[0-9]{10}"
                    id="phone"
                    placeholder="Enter your mobile no"
                    className="input"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3 ">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="input"
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-dark ms-5">Register</button>
                <p className="text-center mt-3  text-white">
                  Already have an account? <Link to="/signin" className='text-decoration-none text-dark fw-bold'>Sigin in</Link>
                </p>
              </form>
                    </div>
                  </div>
                  <div className="col-md-2">

                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="col-md-3">
            </div>
            </div>
        </div>
      </div>
  )
}

export default Register