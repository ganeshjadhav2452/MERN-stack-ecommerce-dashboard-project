import React ,{useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {loginHandler} from '../../reduxStore/slices/authSlice'
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
 const [userDetails, setUserDetails] = useState({
    email:'',
    password:''
 })
 const [error, setError] = useState({
    errorMessage:'',
    isError:false
 })


 const emailChangeHandler = (e)=>{
    setUserDetails((prevData)=>{
        return {
            ...prevData,
            email:e.target.value
        }
    })
 }

 const passwordChangeHandler = (e)=>{
    setUserDetails((prevData)=>{
        return {
            ...prevData,
            password:e.target.value
        }
    })
 }


 const submitHandler =async(e)=>{
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify(userDetails),
        headers:{
            'Content-Type':'application/json'
        }
    })

    
    if(response.ok){
        const data = await response.json();
  const userObj = {
    email:data.email,
    _id:data._id
  }
  console.log(userObj)
    localStorage.setItem('user',JSON.stringify(userObj))
    
    dispatch(loginHandler())

    navigate('/');
    }else{
        console.log(response)
        setError({
            isError:true,
            errorMessage:response.statusText
        })
    }
 }

  return (
    <div className="container ">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body bg-warning" >
            <h5 className="card-title mb-4">Login</h5>
            <form onSubmit={submitHandler} >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" onChange={emailChangeHandler}  value={userDetails.email} className="form-control" id="email" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" onChange={passwordChangeHandler} value={userDetails.password} className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </div>
             {error.isError && <div className="alert d-flex  m-0" 
             >
                <p className=" alert-danger border bg-danger p-1 text-light btn-block">{error.errorMessage}</p>
              </div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
