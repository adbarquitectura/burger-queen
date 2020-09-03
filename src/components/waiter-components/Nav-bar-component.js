import React, { useState } from 'react';
import logo from '../../img/logo.png';
import styles from './Waiter.module.css';
import CurrentTime from './Fecha';
import ItemPostres from './ItemPostres';
import ItemMenu from './Item-menu';
import {Link} from "react-router-dom";

const NavBarLateral = () => {

  const BtnShowMenu = () => console.log('hola menucito')

  const BtnShowDesserts = () => console.log('hola postrecito')

  return (
    <div>
      <div>
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <nav>
        <div onClick={BtnShowMenu} ><p>Menu Principal</p></div>
        <Link to="/postres">postres</Link>
        <div onClick={BtnShowDesserts}><p>Menu Postres</p></div>
        <div><p>Pedidos</p></div>
        <div className={styles.datosPersonalizados}>
          <p>Pedro</p>
          <CurrentTime />
        </div>
      </nav>
    </div>
  );
}

export default NavBarLateral;

/* const BtnShowMenu =() => {

  setShow((show) ? <ItemPostres/> : <ItemMenu/>)
} */

/* const [show, setShow] = useState(true); */
/* return (
  <div>
    <div>
      <img src={logo} className={styles.logo} alt="" />
    </div>
    <nav>
    <button
      type="button"
      onClick={() => {
        setShow(!show);
      }}
    >
      Mostrar {show ? 'Div 2' : 'Div 1'}
    </button>

    {show ? (
      <div style={{ color: 'red' }}>Div 1</div>
    ) : (
      <div style={{ color: 'blue' }}>Div 2</div>
    )}
  <div  ><p>Menu Postres</p></div>
       <div><p>Pedidos</p></div>
      <div className={styles.datosPersonalizados}>
        <p>Pedro</p>
      <CurrentTime/>
      </div>
     </nav>
  </div>
);
}; */