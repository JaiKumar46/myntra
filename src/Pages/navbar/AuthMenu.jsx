import React from 'react'
import Styles from "./navbar.module.css";
import {FaHeart,FaShoppingBag,FaUser} from "react-icons/fa"
import Profile from './Profile';
import { Link, useLocation } from 'react-router-dom';


const AuthMenu = () => {
    let {pathname}=useLocation()
  return (
      <div className={Styles.authMenuBlock}>
          <ul>  {
              pathname!=="/login" && <li>
                  <span><FaUser/></span>
                  <span className={Styles.profiledropContainer}>
                      {/* <a href="#">Profile</a> */}
                      <Link to='/profile' >Profile</Link>
              </span>
              </li>
          }
              
              <li><span>
                  <span><FaHeart/></span>

                  <a href="#">Wishlist</a>
              </span></li>
              <li><span>
                  <span><FaShoppingBag/></span>

                  <a href="#">Bag</a>
              </span></li>
          </ul>
    </div>
  )
}

export default AuthMenu