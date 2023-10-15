import { products } from '../libs/products'

export default function Products() {
    console.log(products)
    return (
        <main className='background-products bg-black d-flex justify-content-center center'>
            <section className='mt-5'>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Preço</th>
                            <th scope="col"></th>
                            <th></th>
                            <th scope="col"><a className='text-white cta my-5' href="/products/new">Adicionar Produto</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>R${product.price}</td>
                                <td><a className='text-white cta' href={`/products/update/${product.id}`}>Editar</a></td>
                                <td><a className='text-white cta' href={`/products/delete/${product.id}`}>Excluir</a></td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    )
}