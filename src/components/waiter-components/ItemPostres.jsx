import React, { Component } from 'react';
import styles from './Waiter.module.css';

class ItemPostres extends Component {
  state = {
    menuData: []
  };
  componentDidMount() {
    fetch('data/Postres.json')
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
            <h1>{item.nombre}</h1>
          </div>
          </div>
       
        );
      }
      )
    )
  };
};

export default ItemPostres;