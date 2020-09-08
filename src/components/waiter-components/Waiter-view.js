import React, { useState, useEffect } from 'react';
import styles from './Waiter.module.css';
import logo from '../../img/logo.png';
import ItemMenu from './Item-menu';
import RenderOrder from './Render-order';
import ItemPostres from './Item-postres';
import CurrentTime from './Fecha/Fecha';
import BtnCerrarSesion from './Button/Button';

import firebase from '../../firebase/Firebase';
import campana from '../../img/campana.png';

const WaiterView = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [ordenesPedidas, setOrdenesPedidas] = useState([]);
  const [countPedido, setCountPedido] = useState(0);

  const [totalPedidoIngresado, setTotalPedidoIngresado] = useState([0]);

  const refListas = firebase.firestore().collection('ordenesListas');

  const getOrdenesListas = () => {
    refListas.onSnapshot((querySnapshot) => {
      console.log(querySnapshot.docs.length)
     setCountPedido(querySnapshot.docs.length);     
    })
  };
  
  useEffect(()=>{
    getOrdenesListas();
  }, []);
  
  const updatemenu = (name) => {
    setShowMenu(name);
  };

  const actualizaEstadoOrden = (ordenRecibida) => {
    const orden = {
      id: ordenRecibida.id,
      nombreItem: ordenRecibida.nombre,
      adicionalesItem: ordenRecibida.adicionales,
      precioItem: ordenRecibida.precio
    };
    setOrdenesPedidas([...ordenesPedidas, orden]);

    setTotalPedidoIngresado([...totalPedidoIngresado, ordenRecibida.precio]);

  };

  const limpiarEstadoOrden = () => {
    setOrdenesPedidas([]);
    setTotalPedidoIngresado([0]);
  }

  const eliminarItemPedido = (indexAEliminar) => {
    const ordenesFiltradas = ordenesPedidas.filter((orden, index) => {
      return index !== indexAEliminar;
    });
    setOrdenesPedidas(ordenesFiltradas);

    const totalOrdenesFiltradas = ordenesFiltradas.map(orden => {
      return orden.precioItem;
    })
    setTotalPedidoIngresado(totalOrdenesFiltradas);
  }

  const actualizarAdicionalesOrdenes = (adicionalesRecibidos) => {
    console.log(adicionalesRecibidos);
    // setOrdenesPedidas(adicionalesRecibidos);
  }


  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div >
          <img src={logo} className={styles.logo} alt="" />
        </div>
        <div>
          <div className={styles.datosPersonalizados}>
            <p onClick={() => updatemenu(true)}>Menú Principal</p>
            <p onClick={() => updatemenu(false)}>Postres</p>
          </div>
          <div>
            <span>{countPedido}</span>            
            <div className={styles.bell} >
              <img src={campana} className={styles.imgbell} alt=""></img>
            </div>
          </div>
          <div className={styles.fecha}>
            <CurrentTime />
          </div>
          <BtnCerrarSesion />
        </div>
      </div>
      <div className={styles.sectionMenu}>
        <div className={styles.sectionMenu}>
          {
            showMenu ? <ItemMenu enviarOrdenes={actualizaEstadoOrden} /> : <ItemPostres enviarOrdenes={actualizaEstadoOrden} />
          }
        </div>
      </div>
      <div className={styles.sectionOrder}>
        <RenderOrder
          ordenesTraidas={ordenesPedidas}
          limpiarEstadoOrden={limpiarEstadoOrden}
          eliminarItemPedido={eliminarItemPedido}
          actualizarAdicionalesOrdenes={actualizarAdicionalesOrdenes}

          totalOrdenesTraidas={totalPedidoIngresado}

        />
      </div>
    </div >
  );
}

export default WaiterView;

