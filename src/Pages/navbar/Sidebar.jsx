import React from 'react'
import MainContent from './MainContent'
import Style from "./Profile.module.css";
import {Link} from "react-router-dom"


const Sidebar = () => {
  return (
    <div className={Style.sidebar}>
      
      <ul>
        <li>
          <Link to="/profile/uploadPhoto">Upload Photo</Link>
        </li>
        <li>
          <Link to="/profile/UpdateProfile">Update Profile</Link>
        </li>
        <li>
          <Link to="/profile/setting">Setting</Link>
        </li>
      </ul>
          
    </div>
  )
}

export default Sidebar