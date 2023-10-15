import { Link } from 'react-router-dom'
import { orders } from '../libs/orders'

export default function Orders() {
    return (
        <main className='background-products bg-black d-flex justify-content-center center'>
            <section className='mt-5'>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                            <th></th>
                            <th scope="col"><a className='text-white cta my-5' href="/orders/new">Adicionar Pedido</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order =>
                            <tr key={order.id}>
                                <td>R${order.total}</td>
                                <td>{order.products[0].name}</td>
                                <td><Link className='text-white cta' to={`/orders/update/${order.id}`}>Editar</Link></td>
                                <td><Link className='text-white cta' to={`/orders/delete/${order.id}`}>Excluir</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    )
}