import React from 'react'
import MenMegaMenu from './MenMEgaMenu';
import Styles from "./navbar.module.css";


const Menu = () => {
  return (
      <div className={Styles.menuBlock}>
          <nav>
              <ul>
                  <li>
                      <a href="">Men</a>
                      <div className={Styles.dropDown}>

                      <MenMegaMenu/>
                      </div>
                  </li>
                  <li><a href="">Women</a></li>
                  <li><a href="">Kids</a></li>
                  <li><a href="">Home&living</a></li>
                  <li><a href="">Beauty</a></li>
                  <li><a href="">Studio <sup>new</sup></a></li>
              </ul>
          </nav>
      </div>
  )
}

export default Menu 