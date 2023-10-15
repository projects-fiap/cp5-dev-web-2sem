import errorGif from '../assets/404-error.gif'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/index.esm'


export function ErrorPage() {
    return (
        <>
            <section className="
                container"
            >
                <div className='row d-flex justify-content-center'>
                    <h1 className='text-center mt-5'>404</h1>
                    <img className='col-lg-6 img-fluid' src={errorGif} alt="" />
                </div>

                <div className="row d-flex justify-content-center">
                    <p className="text-center">Parece que você se perdeu!</p>
                    <a className="btn btn-danger col-lg-3" href="/home">Clique aqui e volta para a página principal!</a>
                </div>
            </section>
        </>
    )
}
