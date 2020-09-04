import React, { useEffect, useState } from 'react';
import styles from './Waiter.module.css';
import firebase from "../../firebase/Firebase";

// import ItemPedido from './Item-pedido';


const RenderOrder = () => {
    console.log('componente Orden');

    const [renderPedido, setRenderPedido] = useState([]);

    const [valorIngresado, setValorIngresado] = useState('');

    const [itemIngresado, setitemIngresado] = useState('La Rosalia');
    const [cantidadItemIngresado, setcantidadItemIngresado] = useState('1');
    const [precioItemIngresado, setprecioItemIngresado] = useState('5000');
    const [totalPedidoIngresado, settotalPedidoIngresado] = useState('');

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
            id: "1",
            nombre: "La Rosalia",
            cantidad: "",
            precio: "5000",
            adicionales: [{}],
            observaciones: "",
            editar: "true",
            eliminar: "false"
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
    }

    return (
        <div>
            <div className={styles.tabla}>
                <h1>Pedidos</h1>
                <div>
                    {renderPedido}

                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>ITEM</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td><button className={styles.btnIcon}>Editar Pedido</button></td>
                                <td>{itemIngresado}</td>
                                <td>{cantidadItemIngresado}</td>
                                <td>{precioItemIngresado}</td>
                                <td><button className={styles.btnIcon}>Eliminar Pedido</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Total: {totalPedidoIngresado} </h2>
                </div>
            </div>

            <div className={styles.sectionDatosCliente}>
                <h2>Numero de Pedido:</h2>
                <input className={styles.inputCliente} value={valorIngresado}></input>
                <h2>Cliente:</h2>
                <input className={styles.inputCliente} value={nameClientIngresado.name}></input>
            </div>
            <div className={styles.sectionBtns}>
                <button onClick={btnEnviarPedido}>Enviar Pedido</button>
                <button className={styles.btnAlert}>Eliminar Pedido</button>
            </div>

        </div>
    );
}


export default RenderOrder;