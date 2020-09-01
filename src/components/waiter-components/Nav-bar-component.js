import React from 'react';
import logo from '../../img/logo.png';
import styles from './Waiter.module.css';

const NavBarLateral = () => {
  return (
    <div>
      <div>
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <nav>
         <div><p>Menu 1</p></div>
         <div><p>Postres</p></div>
         <div><p>Pedidos</p></div>
        <div><p>pedro</p></div>  
       </nav>
    </div>
  );
}

export default NavBarLateral;