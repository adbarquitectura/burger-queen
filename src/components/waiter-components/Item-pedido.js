import React, { useEffect, useState } from 'react';
import styles from './Waiter.module.css';
import firebase from "../../firebase/Firebase";


const ItemPedido = (props) => {
    /* console.log('componente Orden');
    const [valorIngresado, setValorIngresado] = useState('');

    const [itemIngresado, setitemIngresado] = useState('');
    const [cantidadItemIngresado, setcantidadItemIngresado] = useState('0');
    const [precioItemIngresado, setprecioItemIngresado] = useState('');

    const [editarItemIngresado, seteditarItemIngresadoo] = useState('false');
    const [eliminarItemIngresado, seteliminarItemIngresado] = useState('false');

    const [nameClientIngresado, setnameClientIngresado] = useState([{
        name: '',
        mesa: ''
    }]);
    const [notasItemIngresado, setnotasItemIngresado] = useState('');


    const ref = firebase.firestore().collection('ordenes');

    const pruebaFire = () => {
        ref.onSnapshot((querySnapshot) => {
            // const items = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
            });
            setValorIngresado('pedido #' + querySnapshot.docs.length);
        });
    }

    const pruebaFireGet = () => {
        ref
            .get()
            .then((data) => {
                const dataItem = data.docs.forEach(doc => {
                    console.log(doc.data());
                });
            })

    }

    const pruebaFireAdd = () => {
        return ref.add({
            nombre: valorIngresado
        });
    }

    useEffect(() => {
        pruebaFire();
    }, []);

    const btnEnviarPedido = () => {
        pruebaFireAdd().then(() => {
            setValorIngresado('');
            console.log('se limpio el input');
        })
        console.log('se envio');
    }


    const captureValue = (event) => {
        setValorIngresado(event.target.value);
        console.log(valorIngresado);
    } */

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><button className={styles.btnIcon}>Editar Pedido</button></td>
                        <td value={props.nombre}></td>
                        <td value={props.cantidad}></td>
                        <td value={props.precio}></td>
                        <td><button className={styles.btnIcon}>Eliminar Pedido</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ItemPedido;