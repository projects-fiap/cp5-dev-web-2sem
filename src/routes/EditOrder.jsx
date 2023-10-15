import { useNavigate, useParams } from "react-router-dom"
import { orders } from '../libs/orders'
import { products } from "../libs/products"
import { useState } from "react"

export default function EditOrder() {
    console.log(orders)
    const { id } = useParams()
    const navigate = useNavigate()

    const existsOrder = orders.find(item => item.id === id)

    const [order, setOrder] = useState({
        id: existsOrder.id,
        products: existsOrder.products[0],
        total: existsOrder.total
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        const index = orders.indexOf(item => {
            item.id === id
        })

        orders.splice(index, 1, order)
        navigate('/orders')
    }

    const handleChange = (event) => {
        const { value } = event.target

        const product = products.find(product => product.id === value)

        const newOrder = { id: order.id, products: [product], total: product.price }

        setOrder(newOrder)
    }

    return (
        <main className="background-products bg-black d-flex justify-content-center">
            <section className="text-white">
                <form onSubmit={handleSubmit}>
                    <select
                        onChange={handleChange}
                        className="custom-select mt-4 custom-select-lg mb-3"
                    >
                        <option value={order.products.id}>{order.products.name}</option>
                        {products.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <div className="form-group">
                        <label htmlFor="description">Total</label>
                        <input
                            type="text"
                            contentEditable={false}
                            className="form-control"
                            name="total"
                            id="total"
                            value={order.total}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Editar</button>
                </form>
            </section>
        </main >
    )
}