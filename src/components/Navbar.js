import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.svg'
import logoBlue from '../assets/images/logo-blue.svg'


const Navbar = ({ path }) => {

    const [logoSrc, setLogoSrc] = useState(logo)
    const [colorId, setColorId] = useState('')

    useEffect(() => {
        if (path === '/servicios' || path === '/galeria' || path === '/contactos') {
            setLogoSrc(logoBlue)
            setColorId('color-blue')
        } else {
            setLogoSrc(logo)
            setColorId('')
        }
    }, [path])

    return (
        <div className="absolute">
            <nav 
                className="navbar navbar-container navbar-expand-lg autohide"
                id={colorId}
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logoSrc} className="logo-nav" alt="Maere Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list" id={colorId} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/quienes-somos">Quiénes somos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/proyectos">Proyectos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/servicios">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/galeria">Galería</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactos">Contactos</Link>
                            </li>
                            <li className="nav-item no-link">
                                <a 
                                    href="https://wa.me/593969626579"
                                    target="_blank" rel="noreferrer"
                                >
                                    <span className="nav-link">0969626579</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
