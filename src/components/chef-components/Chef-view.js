import React, { useState, useEffect } from 'react';
import styles from './Chef.module.css';
import logo from '../../img/logo.png';
import CurrentTime from './Fecha';
import campana from '../../img/campana.png';
import firebase from '../../firebase/Firebase';
const ChefView = () => {
  const [pedidos, setPedidos] = useState([]);
  const ref = firebase.firestore().collection('ordenes');
  const [count, setCount] = useState(0)

  const getOrder = () => {
    ref.onSnapshot((querySnapshot) => {
      console.log(querySnapshot.docs);
      setPedidos(querySnapshot.docs);
    })
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <img src={logo} className={styles.logo} alt="" />
        </div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}></button>
        <div className={styles.bell} >
          <img src={campana} className={styles.imgbell} alt=""></img>
        </div>
        <div className={styles.fecha}>
          <div className={styles.customerName}>
          </div>
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
      <div className={styles.sectionPedidolisto}><h2>Pedidos Recibidos</h2>
        <div className={styles.boxKitchen}>
          <div className={styles.numberAndtime}>
            Pedido #6
            14:00 hrs
          </div>
          <div className={styles.customerName}>
            {
              pedidos.map(itemOrder => {
                return (
                  <div key={itemOrder.id}>
                    {itemOrder.data().id}
                  </div>
                )
              })
            }
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