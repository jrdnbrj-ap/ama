import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logo2 from '../assets/images/logo-big-white.svg'
import logo3 from '../assets/images/logo-big-blue.svg'


const Footer = ({ path }) => {

    const [logoSrc, setLogoSrc] = useState('')
    const [colorId, setColorId] = useState('')

    useEffect(() => {
        if (path === '/quienes-somos') {
            setLogoSrc(logo2)
            setColorId('color-blue')
        } else if(path === '/contactos') {
            setLogoSrc(logo3)
            setColorId('color-light')
        } else {
            setLogoSrc(logo2)
            setColorId('')
        }
    }, [path])

    return <>
        <section className={`row footer ${colorId}`} id="row-correction">
            <section className="col-lg col-12 col-sm-6">
                <img src={logoSrc} alt="logo" />
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>ACERCA DE NOSOTROS</h3>
                <Link className="rrd-link" to="/">Inicio</Link>
                <Link className="rrd-link" to="/galeria">Galería</Link>
                <Link className="rrd-link" to="/servicios">Servicios</Link>
                <Link className="rrd-link" to="/proyectos">Proyectos</Link>
                <Link className="rrd-link" to="/contactos">Contactos</Link>
                <Link className="rrd-link" to="/quienes-somos">Quiénes Somos</Link>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CONTÁCTENOS</h3>
                <a 
                    href="https://wa.me/593969626579"
                    target="_blank" rel="noreferrer"
                >
                    <span>+593 96 962 6579</span>
                </a>
                <span className="email">alvarezmoralesarquitectura@gmail.com</span>
            </section>
            <section className="col-lg col-12 col-sm-6">
                <h3>CAPACITACIONES</h3>
                <a 
                    href="https://wa.me/593969626579"
                    target="_blank" rel="noreferrer"
                >
                    <i className="bi bi-whatsapp" />
                </a>
                <a 
                    href="https://www.facebook.com/"
                    target="_blank" rel="noreferrer"
                >
                    <i className="bi bi-facebook" />
                </a>
                <a 
                    href="https://www.instagram.com/" 
                    target="_blank" rel="noreferrer"
                >
                    <i className="bi bi-instagram" />
                </a>
            </section>
        </section>
    </>
}

export default Footer
