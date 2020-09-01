import React from 'react';
// import styles from './Waiter.module.css';

const RenderOrder = () => {
    return (
        <div>
            <h1>Pedidos</h1>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>ITEM</th>
                            <th>CANTIDAD</th>
                            <th>PRECIO</th>
                        </tr>
                        <tr>
                            <td>Jlo</td>
                            <td>1</td>
                            <td>500</td>
                            <td>papelera</td>
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