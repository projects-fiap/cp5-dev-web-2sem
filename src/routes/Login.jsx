import { useRef } from 'react'
import Products from './Products'

export default function Login() {

    const user = useRef()
    const password = useRef()
    const getUser = sessionStorage.getItem('userData')
    const getPassword = sessionStorage.getItem('senhaData')

    const handleSubmit = () => {
        if (user.current.value === 'admin' && password.current.value === '12345') {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2)
            sessionStorage.setItem('userData', 'admin')
            sessionStorage.setItem('senhaData', token)
        } else {
            alert('usuário e senha inválidos !!!')
        }
    }

    return (
        <>
            {
                getUser && getPassword ? (
                    <>
                        <Products />
                    </>
                ) : (
                    <main className="bg-black container-fluid" >
                        <div className="d-flex justify-content-center">
                            <h1 className="text-center text-white">Seja Bem Vindo ao Nippon</h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="text-center text-white">Onde nossa única prioridade é a sua experiência.</h5>
                        </div>

                        <div className="row">
                            <div className="background-1 d-flex justify-content-center align-items-center col-lg-6">
                                <section className="login ">
                                    <div className="border-0">
                                        <div className="login-form p-4 card-body bg-orange rounded rounded-5">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row d-flex justify-content-center">
                                                    <h2 className="text-center text-white p-2">Login</h2>
                                                    <div className="col-lg-8 my-2">
                                                        <label htmlFor="Email" className="form-label"></label>
                                                        <input type="text" className="form-control" id="Email" ref={user} placeholder="Usuário" />
                                                    </div>

                                                    <div className="col-lg-8 my-2">
                                                        <label htmlFor="senha" className="form-label"></label>
                                                        <input type="password" id="senha" className="form-control" ref={password} placeholder="Senha" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 d-flex justify-content-center my-4 p-2">
                                                    <button
                                                        className="btn login-btn btn-outline-secondary border border-0 text-white col-lg-6"
                                                        type="submit">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="background-2 d-flex justify-content-end col-lg-6"></div>
                        </div>
                    </main>
                )
            }
        </>
    )
}