import React from "react";
import Styles from "./auth.module.css";

const Register = () => {
  return (
    <section className={Styles.main_register}>
      <article>
        <h1>Complete your sign up</h1>
        <input type="tel" name="num" id="num" placeholder="Mobile Number" />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Create Password"
        />
        <input type="text" name="name" id="name" placeholder="Full Name" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email (Optional)"
        />
        <div className={Styles.gen}>
          <label htmlFor="">Gender</label>
          <input type="radio" name="gen" id="gen" />
          Female
          <input type="radio" name="gen" id="gen" />
          Male
        </div>
        <input
          type="tel"
          name="num"
          id="num"
          placeholder="Alternate Mobile Number"
        />
        <button>CREATE ACCOUNT</button>
      </article>
    </section>
  );
};

export default Register;
