import React, {useEffect} from 'react';
// import styles from './Waiter.module.css';
import firebase from "../../firebase/Firebase";

const RenderOrder = () => {
    const ref = firebase.firestore().collection('ordenes');

    const pruebaFire = () => {               
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {               
                console.log (doc.data());
            });
            console.log(items);
        });
    }

    const pruebaFireGet = () => {               
        ref
        .get()
        .then((data)=>{
            const dataItem= data.docs.forEach(doc => {
                console.log (doc.data());
            });
        })        
       
    }

    useEffect(() => {
        pruebaFire();
    }, []);


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
        </div>
    );
}

export default RenderOrder;