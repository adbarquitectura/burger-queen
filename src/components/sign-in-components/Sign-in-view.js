import React from 'react';
import logo from '../../img/img-login.jpg';
import styles from './Sign-in.module.css';

const SignInView = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <div>
        <img src="img/" alt="" />
      </div>
      <div>
        <input type="text"></input>
        <button>Mesero</button>
        <button>Cocinero</button>
      </div>
    </div>
  );
}

export default SignInView;