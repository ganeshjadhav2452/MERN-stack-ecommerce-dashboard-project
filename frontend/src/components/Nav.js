import React from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { logoutHandler } from "../reduxStore/slices/authSlice";
const Nav = ()=>{
  const dispatch = useDispatch()
  const isLoggedIn = localStorage.getItem('user')
 

  const logoutClickHandler=()=>{
  dispatch(logoutHandler())
    
}

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Your Brand
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home Page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update">
                  Update Page
                </Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile Page
                </Link>
              </li>
            {!isLoggedIn &&  <li className="nav-item">
                <Link className="nav-link" to="/signup">
                Signup
                </Link>
              </li>}
              { isLoggedIn &&  <li onClick={logoutClickHandler} className="nav-item">
                <Link className="nav-link" to="/signup">
                  Logout 
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav