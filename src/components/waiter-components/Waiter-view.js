import React, { useState } from 'react';
import styles from './Waiter.module.css';
import logo from '../../img/logo.png';
import ItemMenu from './Item-menu';
import RenderOrder from './Render-order';
import ItemPostres from './Item-postres';
import CurrentTime from './Fecha/Fecha';
import BtnCerrarSesion from './Button/Button';


const WaiterView = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [ordenesPedidas, setOrdenesPedidas] = useState([]);

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
  };

  const limpiarEstadoOrden = () => {
    setOrdenesPedidas([]);
  }

  const eliminarItemPedido = (indexAEliminar) => {
    const ordenesFiltradas = ordenesPedidas.filter((orden, index) => {
      return index !== indexAEliminar;
    });
    setOrdenesPedidas(ordenesFiltradas);
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
          <div >
            <CurrentTime />
          </div>
          <BtnCerrarSesion />
        </div>
      </div>
      <div className={styles.sectionMenu}>
        <div className={styles.barra}></div>
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
        />
      </div>
    </div >
  );
}

export default WaiterView;

