import { useState } from "react"
import { products } from "../libs/products"
import { useNavigate } from "react-router-dom"
import uuid from "react-uuid"

export default function CreateProduct() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        products.push(product)
        navigate('/products')
    }
    const [product, setProduct] = useState({
        id: uuid(),
        name: '',
        description: '',
        price: '',
    })

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;

        setProduct({ ...product, [name]: value })
    }
    return (
        <main className="background-products bg-black d-flex justify-content-center">
            <section className="text-white">
                <h1>ADICIONAR PRODUTOS</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="hidden"
                            name="id"
                            value={product.id}
                            onChange={handleChange}
                            className="form-text text-muted"
                        />                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nome do produto</label>
                        <input type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descrição do produto</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                            value={product.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Preço do produto</label>
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            id="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </section>
        </main>
    )

}