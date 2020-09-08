import React, { useState, useEffect } from 'react';
import styles from './Chef.module.css';
import logo from '../../img/logo.png';
import CurrentTime from './Fecha';

import firebase from '../../firebase/Firebase';
import BtnCerrarSesion from '../waiter-components/Button/Button';
import campana from '../../img/campana.png';

const ChefView = () => {
  const ref = firebase.firestore().collection('ordenes');

  const [count, setCount] = useState(0);

  const [pedidos, setPedidos] = useState([]);
  const [detallePedidos, setDetallePedidos] = useState([]);

  const getOrder = () => {
    ref.orderBy('id', 'asc').onSnapshot((querySnapshot) => {
      // console.log(querySnapshot.docs.length);      
      setPedidos(querySnapshot.docs);
      setCount(querySnapshot.docs.length);
      setDetallePedidos(querySnapshot.docs);
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

        <div>
          <span>{count}</span>
          <div className={styles.bell}>
            <img src={campana} className={styles.imgbell} alt=""></img>
          </div>
        </div>

        <div className={styles.fecha}>
          <CurrentTime />
        </div>
        <BtnCerrarSesion />
      </div>

      <div className={styles.sectionPedido}>
        {
          detallePedidos.map((orden, indice) => {
            /* console.log(detallePedidos);
            console.log(orden.data()); */
            return (
              <div key={indice}>
                <div>
                  <p>{orden.data().id}</p>
                  {[orden.data().orden].map(item => {
                    // console.log(item)
                    return (
                      item.map((element, indice) => {
                        // console.log(element.nombre);
                        return (
                          <div key={indice}>
                            <p>{element.nombre}</p>
                            <p>{element.cantidad}</p>
                          </div>
                        )
                      })
                    )
                  })
                  }
                </div>
                <div className={styles.buttonKitchen}>
                  <button className={styles.botonCocina}>En Proceso</button>
                  <button className={styles.botonCocina}>Listo</button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={styles.sectionPedidolisto}><h2>Pedidos Recibidos</h2>
        <div className={styles.boxKitchen}>
          <div className={styles.numberAndtime}>
            {/* Pedido #6
            14:00 hrs */}
          </div>
          <div className={styles.customerName}>
            {
              pedidos.map(itemOrder => {
                return (
                  <div key={itemOrder.id}>
                    {itemOrder.data().id}
                    {/* <button className={styles.buttonSee}>Ver Pedido</button> */}
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>

  );
}


export default ChefView;