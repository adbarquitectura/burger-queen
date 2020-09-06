import React, { useState } from 'react';
import styles from './Waiter.module.css';

const AdicionalesComponent = (props) => {
    const [notasItemIngresado, setnotasItemIngresado] = useState('');
    const [adicionalesSeleccionados, setAdicionalesSeleccionados] = useState([]);

    const actualizaOrden = () => {
        props.actualizarAdicionales(props.orden);

    };

    const captureNotasItem = (event) => {
        setnotasItemIngresado(event.target.value);
    }
    const checkActivado = (item) => {
        console.log(item);
    }

    return (
        <div>
            <h2>Adicionales:</h2>
            {
                props.orden && props.orden.adicionalesItem.map((item, indice) => {
                    return (
                        <div key={indice}>
                            <input
                                onChange={()=> checkActivado(item)}
                                type="checkbox"
                                name="adicionales"
                                value={item.precio}
                            />{item.nombre}
                        </div>
                    )
                })
            }
            <textarea className={styles.textarea} type="search" name="post" placeholder="Observaciones:"
                onChange={captureNotasItem}
                defaultValue={notasItemIngresado}>
            </textarea>
            <button onClick={actualizaOrden} className={styles.btnAlert}>Cerrar Adicionales</button>
        </div>
    )

}

export default AdicionalesComponent;

