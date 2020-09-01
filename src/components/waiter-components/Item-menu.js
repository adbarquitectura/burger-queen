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
           <div className={styles.box}>
            <div key={item.id} className={styles.card}>
            <img src={item.img} alt="" className={styles.imgItemMenu} />
            <h1>{item.nombre}</h1>
          </div>
          </div>
       
        );
      }
      )
    )
  };
};

export default ItemMenu;