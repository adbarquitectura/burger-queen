import React, { Component } from 'react';
import styles from './Waiter.module.css';

class ItemMenu extends Component {
  state = {
    menuData: []
  };
  componentDidMount() {
    fetch('data/Menu.json')
      .then(response => response.json())
      .then(data => this.setState({ menuData: data }));
  }
  render() {
    const { menuData } = this.state;
    return (
      menuData.map(item => {
        return (
           <div key={item.id} className={styles.box}>
            <div className={styles.card}>
            <img src={item.img} alt="" className={styles.imgItemMenu} />
            <h3>{item.nombre}</h3>
          </div>
          </div>
       
        );
      }
      )
    )
  };
};

export default ItemMenu;