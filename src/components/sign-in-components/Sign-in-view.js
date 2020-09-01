import React from 'react';
import styles from './Sign-in.module.css';

import {  
  Link
} from "react-router-dom";

const SignInView = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="img/img-login.jpg" className={styles.logo} alt="" />
      </div>
      <div>
        <img src="img/logo.png"  className={styles.logo} alt="" />
      </div>
      <div>
        <input type="text"></input>
        {/* <button>Mesero</button> */}
        <div><Link to="/waiter">Waiter</Link></div>
        <div><Link to="/chef">Chef</Link></div>
        {/* <button>Cocinero</button> */}               
      </div>
    </div>
  );
}

export default SignInView;