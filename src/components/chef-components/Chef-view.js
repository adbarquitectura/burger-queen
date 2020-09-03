import React from 'react';
import styles from './Chef.module.css';
import logo from '../../img/logo.png';

const ChefView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
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
        <div className={styles.sectionPedido}>
         <div className={styles.vistaPedido}>pedido</div>
         <div className={styles.vistaPedido}>pedio</div>
         <div className={styles.vistaPedido}>pedido</div>
        </div>
        <div className={styles.sectionPedidolisto}>
        <div className={styles.verPedido}>pedido</div>
         <div className={styles.verPedido}>pedio</div>
         <div className={styles.verPedido}>pedido</div>
        </div>
        </div>
    );
  }

export default ChefView;