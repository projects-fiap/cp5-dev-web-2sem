import { useNavigate, useParams } from "react-router-dom"
import { products } from '../libs/products'
import { useState } from "react"

export default function EditProduct() {
    const { id } = useParams()
    const navigate = useNavigate()

    const existsProduct = products.find(item => item.id === id)

    const [product, setProduct] = useState({
        id: existsProduct.id,
        name: existsProduct.name,
        description: existsProduct.description,
        price: existsProduct.price,
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        const index = products.indexOf(item => {
            item.id === id
        })

        products.splice(index, 1, product)
        navigate('/auth')
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value })
    }

    return (
        <main className="background-products bg-black d-flex justify-content-center">
            <section className="text-white">
                <h1>EDITAR PRODUTOS</h1>
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
                    <button type="submit" className="btn btn-primary mt-4">Editar</button>
                </form>
            </section>
        </main>
    )
}