import { useNavigate, useParams } from "react-router-dom"
import { products } from '../libs/products'
import { useState } from "react"

export default function EditProduct() {
    const { id } = useParams()
    const navigate = useNavigate()

    const existsProduct = products.filter(item => item.id === id)

    const [product, setProduct] = useState({
        id: existsProduct[0].id,
        name: existsProduct[0].name,
        description: existsProduct[0].description,
        price: existsProduct[0].price,
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        const index = products.indexOf(item => {
            item.id === id
        })

        products.splice(index, 1, product)
        navigate('/products')
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
                        <label htmlFor="description">Descraição do produto</label>
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