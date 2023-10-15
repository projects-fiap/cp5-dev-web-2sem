import { useState } from "react"
import { orders } from "../libs/orders"
import { useNavigate } from "react-router-dom"
import { products } from "../libs/products"
import uuid from "react-uuid"

export default function CreateOrder() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        orders.push(order)
        navigate('/orders')
    }
    const [order, setOrder] = useState({
        id: uuid(),
        products: [],
        total: 0,
    })

    const handleProductChange = (event) => {
        event.preventDefault()

        const { value } = event.target

        const product = products.find(product => product.id === value)

        const newOrder = { id: order.id, products: [product], total: product.price }

        setOrder(newOrder)
    }

    return (
        <main className="background-products bg-black d-flex justify-content-center">
            <section className="text-white">
                <h1>ADICIONAR PEDIDO</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="hidden"
                            name="id"
                            value={order.id}
                            className="form-text text-muted"
                        />
                    </div>
                    <div>
                        <select
                            className="custom-select mt-4 custom-select-lg mb-3"
                            onChange={handleProductChange}
                        >
                            <option value="Produtos">Produtos</option>
                            {products.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
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
                    <button type="submit" className="btn btn-primary mt-4">Cadastrar</button>
                </form>
            </section>
        </main>
    )

}