import { products } from '../libs/products'

export default function Products() {
    return (
        <main className='background-products bg-black d-flex justify-content-center'>
            <section className='mt-5'>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Preço</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>R${product.price}</td>
                                <td><a className='text-white cta' href="">Editar</a></td>
                                <td><a className='text-white cta' href="">Excluir</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    )
}