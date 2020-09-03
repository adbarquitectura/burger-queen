import React, { useEffect, useState } from 'react';
import styles from './Waiter.module.css';
import firebase from "../../firebase/Firebase";
import ItemPedido from './Item-pedido';


const RenderOrder = () => {
    console.log('componente Orden');
    
    const [valorIngresado, setValorIngresado] = useState('');

    const [itemIngresado, setitemIngresado] = useState('');
    const [cantidadItemIngresado, setcantidadItemIngresado] = useState('0');
    const [precioItemIngresado, setprecioItemIngresado] = useState('');
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
            setValorIngresado('pedido #'+ querySnapshot.docs.length);
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
            <h1>Pedidos</h1>
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
                        <ItemPedido
                        nombre= {itemIngresado}
                        cantidad="1"
                        precio="500"
                        />                       
                    </tbody>
                </table>
            </div>
            <h2>Total: {totalPedidoIngresado} </h2>
            <h2>Numero de Pedido:<input value={valorIngresado}></input></h2>
            <h2>Cliente:<input value={nameClientIngresado.name}></input></h2>            
            <button onClick={btnEnviarPedido}>Enviar Pedido</button>
            <button className={styles.btnAlert}>Eliminar Pedido</button>
        </div>
    );
}

export default RenderOrder;