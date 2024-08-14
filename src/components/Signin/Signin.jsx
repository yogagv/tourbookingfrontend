import React, { useContext, useState } from 'react'
import user from '../../assets/images/user.png';
import login from '../../assets/images/login.png';
import { Link, useNavigate } from 'react-router-dom';
import './signin.css';
import { AuthContext } from '../Context/AuthContext';
import { BASE_URL } from '../utils/config';


const Signin = () => {

      const [credentials, setCredentials] = useState({

        email: undefined,
        password: undefined,

      })

      const { dispatch } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleChange = (e) => {

          setCredentials((prev)=> ({ ...prev, [e.target.id]: e.target.value}));

      }

      const handleSubmit = async (e) => {

          e.preventDefault();

          dispatch({ type: "LOGIN_START" });

          try{

              const res = await fetch(`${BASE_URL}/auth/userLogin`, {
              method: "POST",
              headers: {"content-type":"application/json"},
              credentials: 'include',
              body: JSON.stringify(credentials)
            });
            
            const result = await res.json();
            
            if(!result.ok){

              console.log(result.message);

            }
            
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: result.data,
              token: result.token,
              role: result.role,
            });

            navigate("/tour")

          }catch(error){
            
            dispatch({ type: "LOGIN_FAILURE", payload: error.message });

          }

      }

  return (
    <div>
        <div className="container ">
      <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6 mt-5 signin">
              <div className="row">
              <div className="col-md-6">
              <img src={login} alt="register"/>
                </div>
              <div className="col-md-6 signinuser">
                <div className="row">
                  <div className="col-md-2">
                  
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <img src={user} alt="user"/>
                      <h3 className='text-white mt-2 ms-5'>Signin</h3>
                      <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3 ">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-dark ms-5">Signin</button>
                <p className="text-center mt-3  text-white">
                  Don't have an account? <Link to="/register" className='text-decoration-none text-dark fw-bold'>Register</Link>
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

export default Signin