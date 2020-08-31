import React from 'react';
import styles from './Waiter.module.css';
import menuData from '../../data/Menu.js';

const menuCocina = menuData.menucito;

const ItemMenu = () => {
  return (
    menuCocina.map(item => {
      console.log(item);
      return(
      <div className={styles.sectionMenu}>
        <img src={item.img} alt="" />
        <h1>{item.nombre}</h1>
        <p>{item.descripcion}</p>
      </div>
      );    
})
);
};

export default ItemMenu;