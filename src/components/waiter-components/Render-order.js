import React, { useEffect, useState } from 'react';
// import styles from './Waiter.module.css';
import firebase from "../../firebase/Firebase";


const RenderOrder = () => {
    console.log('componente Orden');
    const [valorIngresado, setValorIngresado] = useState('');

    const ref = firebase.firestore().collection('ordenes');

    const pruebaFire = () => {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
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
                        <tr>
                            <td>Icono Edit</td>
                            <td>Jlo</td>
                            <td>1</td>
                            <td>500</td>
                            <td>Icono papelera</td>
                        </tr>
                        <tr>
                            <td>La Rosalia</td>
                            <td>1</td>
                            <td>500</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>La Rosalia</td>
                            <td>1</td>
                            <td>500</td>
                            <td>papelera</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2>Total   1500$</h2>
            <h2>Numero de Pedido</h2>
            <h2>Cliente</h2>
            <input onChange={captureValue} value={valorIngresado}></input>
            <button onClick={btnEnviarPedido}>Enviar Pedido</button>
        </div>
    );
}

export default RenderOrder;