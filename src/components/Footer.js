import { Link } from 'react-router-dom'

import logo2 from '../assets/images/logo-big-white.svg'


const Footer = () => {

    return <>
        <section className="row footer" id="row-correction">
            <section className="col-lg col-12 col-sm-6">
                <img src={logo2} alt="logo" />
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>ACERCA DE NOSOTROS</h3>
                <Link className="rrd-link" to="/">Inicio</Link>
                <Link className="rrd-link" to="/galeria">Galería</Link>
                <Link className="rrd-link" to="/servicios">Servicios</Link>
                <Link className="rrd-link" to="/contactos">Contactos</Link>
                <Link className="rrd-link" to="/quienes-somos">Quiénes Somos</Link>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CONTÁCTENOS</h3>
                <a 
                    href="https://wa.me/593998799739"
                    target="_blank" rel="noreferrer"
                >
                    <span>+593 96 962 6579</span>
                </a>
                <span>alvarezmoralesarquitectura@gmail.com</span>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CAPACITACIONES</h3>
                <a 
                    href="https://wa.me/593998799739"
                    target="_blank" rel="noreferrer"
                >
                    <i className="bi bi-whatsapp" />
                </a>
                <a 
                    href="https://www.facebook.com/Inova-Constructores-109525017849374/"
                    target="_blank" rel="noreferrer"
                >
                    <i className="bi bi-facebook" />
                </a>
                <a 
                    href="https://www.instagram.com/inova_constructores/" 
                    target="_blank" rel="noreferrer"
                >
                    <i className="bi bi-instagram" />
                </a>
            </section>
        </section>
    </>
}

export default Footer
