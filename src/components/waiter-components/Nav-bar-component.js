import React from 'react';
import logo from '../../img/logo.png';
import styles from './Waiter.module.css';


const NavBarLateral = () => {
  return (
    <div>
      <div>
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <nav className="links">
        <ul>
          <li><a href="/">Menú Principal</a></li>
          <li><a href="/">Postres</a></li>

        </ul>
      </nav>
    </div>
  );
}

export default NavBarLateral;


