import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.svg'


const Navbar = () => {
    useEffect(() => {
        const autohide = document.querySelector('.autohide')
        let lastScroll = 0

        window.onscroll = e => {
            const currentScroll = document.documentElement.scrollTop
            
            if (lastScroll <= currentScroll) {
                autohide.classList.remove('scrolled-up')
                autohide.classList.add('scrolled-down')
            } else {
                autohide.classList.add('scrolled-up')
                autohide.classList.add('navbar-sticky')
            }
            
            lastScroll = currentScroll
        }
    })

    return (
        <div className="absolute">
            <nav className="navbar navbar-container navbar-expand-lg bg-light autohide">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="logo-nav" alt="Maere Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list" />
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
                                <Link className="nav-link" to="/galeria">Galería</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactos">Contactos</Link>
                            </li>
                            <li className="nav-item no-link">
                                <a 
                                    href="https://wa.me/593998799739"
                                    target="_blank" rel="noreferrer"
                                >
                                    <span className="nav-link">0998799739</span>
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
