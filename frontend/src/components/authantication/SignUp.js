import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const SignUp = () => {
  const {isLoggedIn} = useSelector((state)=> state.auth)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const nameChangeHandler = (e)=>{
      setFormData((prevData)=>{
        return {
          ...prevData,
          name:e.target.value
        }
      })
  }
  const emailChangeHandler = (e)=>{
      setFormData((prevData)=>{
        return {
          ...prevData,
          email:e.target.value
        }
      })
  }
  const passwordChangeHandler = (e)=>{
      setFormData((prevData)=>{
        return {
          ...prevData,
          password:e.target.value
        }
      })
  }

  const submitHandler = async(e)=>{
    e.preventDefault()
    console.log(formData)
    try {
      const response = await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify(formData),
        headers:{
          'Content-Type':'application/json'
        }
      })
  
      const data = await response.json()
    if(data){
      localStorage.setItem('user',JSON.stringify(data))
      navigate('/')
    }
    } catch (error) {
      console.log(error)
    }
   
  }

 
  useEffect(()=>{
    const isLoggedIn = localStorage.getItem('user')

    if(isLoggedIn){
      navigate('/')
    }
  },[isLoggedIn])
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body bg-warning" >
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={nameChangeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={emailChangeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={passwordChangeHandler}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
