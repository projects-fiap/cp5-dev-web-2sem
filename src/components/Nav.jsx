import { HiShoppingCart, HiSearch } from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiLogOut } from "react-icons/fi"
import logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom"


export default function Nav() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        sessionStorage.removeItem('useData')
        sessionStorage.removeItem('senhaData')
        alert("saindo da sessão")
        navigate('/home')
    }
    return (
        <nav className="navbar navbar-expand-lg px-2 bg-blue border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu className="text-orange" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto gap-5">
                        <li className="nav-item">
                            <Link className="nav-link active text-orange " aria-current="page" to={"/home"}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-orange " aria-current="page" to={"/about"}>SOBRE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-orange " aria-current="page" to={"/products"}>PRODUTOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-orange " aria-current="page" to={"/auth"}>MINHA CONTA</Link>
                        </li>
                    </ul>
                    <form className="fs-3 justify-content-end">
                        <Link to={'/orders'}>
                            <HiShoppingCart className="text-icon" />
                        </Link>
                        <Link to={'/auth'}>
                            <HiSearch className="text-icon" />
                        </Link>
                        <span onClick={handleLogout}>
                            <FiLogOut className="text-icon" />
                        </span>
                    </form>
                </div>
            </div>
        </nav>
    )
}