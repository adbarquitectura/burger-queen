import React from 'react';
import styles from './Waiter.module.css';
import NavBarLateral from './Nav-bar-component';
import ItemMenu from './Item-menu';


const WaiterView = () => {
  return (
    <div className={styles.container}>
      <NavBarLateral/>
      <ItemMenu/>      
      <div className={styles.sectionOrder}>Seccion de pedido</div>
    </div>
  );
}

export default WaiterView;