import React, { useState, useEffect } from 'react';
import styles from './Chef.module.css';
import logo from '../../img/logo.png';
import CurrentTime from './Fecha';

import firebase from '../../firebase/Firebase';
import BtnCerrarSesion from '../waiter-components/Button/Button';
import campana from '../../img/campana.png';

const ChefView = () => {
  const ref = firebase.firestore().collection('ordenes');
  const refListas = firebase.firestore().collection('ordenesListas');

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

  const agregarOrdenLista = (ordenEntregada) => {
    refListas.add({ ordenEntregada });
  }


  useEffect(() => {
    getOrder();
  }, []);

  const deleteOrden = (ordenId) => {
    return ref         
      .doc(ordenId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  const enviarPedidoListo = (pedido, ordenado, orden) => {
    console.log('se envio pedido');
    console.log(ordenado);
    console.log(pedido);
    console.log(orden.id);

    const filltroPedidosEjecutados = detallePedidos.filter(pedidoListo => {
      pedidoListo = pedidoListo.data().id;
      return pedidoListo !== pedido;
    });

    agregarOrdenLista(ordenado);
    deleteOrden(orden.id);
    setDetallePedidos(filltroPedidosEjecutados);
  }

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
          detallePedidos.map((ordenes, indice) => {
            return (
              <div key={indice}>
                <div>
                  <p>{ordenes.data().id}</p>
                  {[ordenes.data().orden].map(item => {
                    return (
                      item.map((element, indiceA) => {
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
                  <button onClick={() => enviarPedidoListo((ordenes.data().id), (ordenes.data()), ordenes)} className={styles.botonCocina}>Listo</button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={styles.sectionPedidolisto}><h2>Pedidos Recibidos</h2>
        <div className={styles.boxKitchen}>
          <div className={styles.numberAndtime}></div>
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