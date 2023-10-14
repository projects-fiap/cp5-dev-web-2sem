import { HiShoppingCart, HiSearch } from "react-icons/hi"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/index.esm'
import logo from '../assets/logo.png'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-blue border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-text-right text-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto gap-5">
                        <li className="nav-item">
                            <a className="nav-link active text-orange fs-5" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-orange fs-5" aria-current="page" href="#">SOBRE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-orange fs-5" aria-current="page" href="#">CATALOGO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-orange fs-5" aria-current="page" href="#">SOBRE A EQUIPE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-orange fs-5" aria-current="page" href="#">MINHA CONTA</a>
                        </li>
                    </ul>
                    <form className="fs-3 justify-content-end">
                        <a href="">
                            <HiShoppingCart className="text-icon" />
                        </a>
                        <a href="">
                            <HiSearch className="text-icon" />
                        </a>
                    </form>
                </div>
            </div>
        </nav>
    )
}