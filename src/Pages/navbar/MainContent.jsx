import React from 'react'
import { Outlet } from 'react-router-dom';
import Styles from "./Profile.module.css";


const MainContent = () => {
  return (
    <div className={Styles.mainContent}>
      <Outlet/>
    </div>
  )
}

export default MainContent