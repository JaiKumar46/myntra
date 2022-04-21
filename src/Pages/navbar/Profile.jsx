import React from 'react'
import Styles from "./navbar.module.css"
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Style from './Profile.module.css'

const Profile = () => {
  return (
    // <div className={Styles.ProfileDrop}>
    //   <div>
    //     <h3>Welcome</h3>
    //     <p>To access account and manage orders</p>
    //     <Link to='/login'><button>login/signup</button></Link>
    //   </div>
    //   <div className={Styles.hr_div2}></div>
    //   <div>
    //     <ul>
    //       <li><a href="">Orders</a> </li>
    //       <li><a href="">Wishlist </a></li>
    //       <li><a href="">GiftCards </a></li>
    //       <li> <a href="">Contact Us</a></li>
    //       <li>
    //         <p> <a href="">Myntra insider</a></p>
    //         <span>New</span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className={Styles.hr_div2}></div>

    //   <div>
    //     <ul>
    //       <li> <a href="">Myntra Credit</a></li>
    //       <li> <a href="">Coupons</a></li>
    //       <li> <a href="">Saved Cards</a></li>
    //       <li><a href="">Saved Addresses </a></li>
    //     </ul>
    //   </div>
    // </div>
    <div className={Style.profile}>
      <Sidebar />
      <MainContent/>
    </div>
  );
}

export default Profile