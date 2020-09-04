import React, { Component } from 'react';
import styles from './Waiter.module.css';
import logo from '../../img/logo.png';
import ItemMenu from './Item-menu';
import RenderOrder from './Render-order';
import ItemPostres from './Item-postres';
import CurrentTime from './Fecha';

class WaiterView extends Component {

  state = {
    showMenu: "menuPrincipal"
  };

  updatemenu(name) {
    this.setState({
      showMenu: name
    })
  }
  render() {
    const desiredMenu = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.navBar}>
          <div >
            <img src={logo} className={styles.logo} alt="" />
          </div>
          <div>
            <div className={styles.datosPersonalizados}>
              <p onClick={() => this.updatemenu(true)}>Menú Principal</p>
              <p onClick={() => this.updatemenu(false)}>Postres</p>
            </div>
            <div className={styles.fecha}>
              <p>Pedro</p>
              <CurrentTime />
            </div>
          </div>
        </div>
        <div className={styles.sectionMenu}>
          <div className={styles.barra}></div>
          <div className={styles.sectionMenu}>
            {
              this.state.showMenu ? <ItemMenu />
                :
                <ItemPostres />
            }
          </div>
        </div>
        <div className={styles.sectionOrder}>
          <RenderOrder />
        </div>
      </div >
    );
  }
}

export default WaiterView;

