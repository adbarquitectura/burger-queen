import React, { Component } from 'react';
import styles from './Waiter.module.css';

class ItemPostres extends Component {
  state = {
    postresData: []
  };
  componentDidMount() {
    fetch('data/Postres.json')
      .then(response => response.json())
      .then(data => this.setState({ postresData: data }));
  }
  render() {
    const { postresData } = this.state;
    return (
      postresData.map(item => {
        return (
           <div key={item.id} className={styles.box2}>
            <div className={styles.card}>
            <img src={item.img} alt="" className={styles.imgItemPostres} />
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