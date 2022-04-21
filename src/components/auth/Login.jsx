import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from "./auth.module.css";
import { Link } from 'react-router-dom';

const Login = () => {
    
  return (
    <section>
          <article className={Styles.loginContainer}>
              <div>

        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg"
          alt=""
        />
        <form action="">
            <h1>Login or Signup</h1>
            <input type="tel" name="phoneNo" id="phoneNo" />
            <p>
              By continuing,I agree to the <span>Terms of Use</span>&
              <span>Privacy policy</span>
            </p>
            <button type="submit">Continue</button>
            <p>
              Have trouble logging in? <span><Link to="/register">Register</Link></span>
            </p>
        </form>
              </div>
      </article>
    </section>
  );
}

export default Login