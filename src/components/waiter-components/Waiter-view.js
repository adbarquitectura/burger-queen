import React from 'react';
import styles from './Waiter.module.css';
import NavBarLateral from './Nav-bar-component';
import ItemMenu from './Item-menu';
import RenderOrder from './Render-order';


const WaiterView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavBarLateral />
      </div>
      <div className={styles.sectionMenu}>
        <ItemMenu />
      </div>
      <div  className={styles.sectionOrder}>
        <RenderOrder />
      </div>
    </div>
  );
}

export default WaiterView;