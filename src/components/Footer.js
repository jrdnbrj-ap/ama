import { Link } from 'react-router-dom'

import logo2 from '../assets/images/logo2.svg'


const Footer = () => {

    return <>
        <section className="row footer" id="row-correction">
            <section className="col-lg col-12 col-sm-6">
                <img src={logo2} alt="logo" />
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>ACERCA DE NOSOTROS</h3>
                <Link className="rrd-link" to="/quienes-somos">Quiénes Somos</Link>
                <Link className="rrd-link" to="/contactos">Contactos</Link>
                <Link className="rrd-link" to="/proyectos">Proyectos</Link>
                <Link className="rrd-link" to="/galeria">Galería</Link>
                <Link className="rrd-link" to="/kairos">Kairos</Link>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CONTÁCTENOS</h3>
                <a 
                    href="https://wa.me/593998799739"
                    target="_blank" rel="noreferrer"
                >
                    <span>+593 99 8799 9739</span>
                </a>
                <span>info@lacarvas.com</span>
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
