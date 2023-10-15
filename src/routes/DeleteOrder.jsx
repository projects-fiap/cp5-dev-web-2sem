import { useNavigate, useParams } from "react-router-dom"
import { orders } from "../libs/orders"
import { useState } from "react"

export default function DeleteOrder() {
    const { id } = useParams()
    const navigate = useNavigate()

    const existsOrder = orders.find((item) => item.id === id)
    const [order] = useState({
        id: existsOrder.id,
        products: existsOrder.products[0],
        total: existsOrder.total
    })

    const handleDelete = (event) => {
        event.preventDefault()
        const index = orders.findIndex(item => item.id === order.id)
        orders.splice(index, 1)
        navigate('/orders')
    }

    return (
        <main className="background-products bg-black d-flex justify-content-center">
            <section className="delete-box p-4 bg-gray rounded rounded-5 text-orange">
                <h1>Excluir Produto</h1>
                <div>
                    <p>Total : {order.total}</p>
                    <p>Product : {order.products.name}</p>
                </div>
                <div>
                    <button
                        onClick={handleDelete}
                        className="btn  login-btn btn-outline-secondary border border-0 text-white col-lg-3"
                        type="submit">Excluir</button>
                    <button
                        onClick={() => navigate('/products')}
                        className="btn login-btn mx-4 btn-outline-secondary border border-0 text-white col-lg-4"
                        type="submit">Cancelar</button>
                </div>
            </section>
        </main>
    )
}