import React from 'react';
import styles from './Chef.module.css';
import logo from '../../img/logo.png';
import CurrentTime from './Fecha';

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
        <div className={styles.fecha}>
          <p>Pedro</p>
          <CurrentTime />
        </div>
      </div>

      <div className={styles.sectionPedido}>
        <div className={styles.cajaPedido}>
          <div className={styles.pedidoitems}>
            <div className={styles.items}>Items
           <div>
                Jlo
                Maluna
            </div>
            </div>
            <div className={styles.cantidad}>Cantidad
             <div>
                1
            </div>
            </div>
            <div className={styles.observaciones}>observaciones
             <div>Sin Rocineta, ni jamon
             </div>
            </div>
          </div>
          <div className={styles.buttonKitchen}>
            <button className={styles.botonCocina}>En Proceso</button>
            <button className={styles.botonCocina}>Listo</button>
          </div>
        </div>
      </div>
      <div className={styles.sectionPedidolisto}> <h2>Pedidos Recibidos</h2>
        <div className={styles.boxKitchen}>
          <div className={styles.numberAndtime}>
            Pedido #6
            14:00 hrs
          </div>
          <div className={styles.customerName}>
            Amanda Diaz
          </div>
          <div className={styles.seeOrder}>
            <button className={styles.buttonSee}>Ver Pedido</button>
          </div>
        </div>

      </div>
    </div>

  );
}



export default ChefView;