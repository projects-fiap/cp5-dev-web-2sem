import { useNavigate, useParams } from "react-router-dom"
import { products } from "../libs/products"
import { useState } from "react"

export default function DeleteProduct() {
    const { id } = useParams()
    const navigate = useNavigate()

    const existsProduct = products.find(item => item.id === id)


    const [product] = useState({
        id: existsProduct.id,
        name: existsProduct.name,
        description: existsProduct.description,
        price: existsProduct.price,
    })

    const handleDelete = (event) => {
        event.preventDefault()

        const index = products.findIndex(item =>
            item.id === id
        )

        products.splice(index, 1)
        navigate('/products')
    }


    return (
        <main className="background-products bg-black d-flex justify-content-center">
            <section className="delete-box p-4 bg-gray rounded rounded-5 text-orange">
                <h1>Excluir Produto</h1>
                <div>
                    <p>Nome : {product.name}</p>
                    <p>Descrição : {product.description}</p>
                    <p>Price : {product.price}</p>
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