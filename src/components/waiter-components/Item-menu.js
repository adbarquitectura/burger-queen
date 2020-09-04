import React, { Component } from 'react';
import styles from './Waiter.module.css';

class ItemMenu extends Component {
  state = {
    menuData: [],
    indexItem: []
  };

  componentDidMount() {
    fetch('data/Menu.json')
      .then(response => response.json())
      .then(data => this.setState({ menuData: data }));
  }

  handleClick = (id, e) => {    
    this.setState({ indexItem: id });
    const { indexItem } = this.state;
    console.log(indexItem);
  };

  render() {
    const { menuData } = this.state;

    return (
      menuData.map((item, i) => {
        return (
          <div
            onClick={this.handleClick.bind(this, item.id)}
            key={i}
            data-id={item.id}
            className={styles.box}>
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