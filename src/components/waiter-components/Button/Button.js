import React from 'react';
import styles from './Button.module.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const BtnCerrarSesion = () => {

    return (
        <div className={styles.buttoncerrar}>
              <button className={styles.button}><Link to="/">Cerrar Sesión</Link></button>
        </div>

    )
}

export default BtnCerrarSesion;