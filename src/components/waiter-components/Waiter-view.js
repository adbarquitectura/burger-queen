import React, { Component } from 'react';
import styles from './Waiter.module.css';
import NavBarLateral from './Nav-bar-component';
import ItemMenu from './Item-menu';
import RenderOrder from './Render-order';
import ItemPostres from './Item-postres';

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
          <NavBarLateral />
        </div>
        <div className={styles.allmenu}>
          <div className={styles.barra}>
            <div> <button onClick={() => this.updatemenu(false)}>Menú Principal</button></div>
            <div><button onClick={() => this.updatemenu(true)}>Postres</button></div>
          </div>
          <div className={styles.sectionMenu}>
            {
              this.state.showMenu ? <ItemPostres />
                :
                <ItemMenu />
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

