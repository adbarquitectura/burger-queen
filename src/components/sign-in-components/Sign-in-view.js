import React from 'react';
import imgHome from '../../img/img-login.jpg';
import logo from '../../img/logo.png';
import styles from './Sign-in.module.css';

import {  
  Link
} from "react-router-dom";

const SignInView = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={imgHome} className={styles.logo} alt="" />
      </div>
      <div>
        <img src={logo} className={styles.logo} alt="" />
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