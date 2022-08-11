import { Link } from 'react-router-dom'

import Home1 from '../assets/images/Home1.png'

import logo from '../assets/images/logo.svg'
import building3 from '../assets/images/building3.png'
import circles from '../assets/images/circles.png'
import logoBig from '../assets/images/logo-big.svg'
import logoBigMobile from '../assets/images/logo-big-mobile.svg'
import gabriel from '../assets/images/gabriel.jpg'

import ConctactForm from '../components/ContactForm'


const Home = () => {

    const info = 'Somos una empresa cuyo punto focal gira alrededor del confort del cliente. Buscamos la complacencia de las necesidades y anhelos del usuario, apuntando siempre a la excelencia en cada uno de nuestros proyectos. Nuestro enfoque prioriza optimizar todo presupuesto para llegar a resultados de la mayor calidad, estética y comodidad.'

    return (
        <>
            <section className="video-container">
                <img src={Home1} alt="Home" id="inova-experiencia" />
                <div className="video-text">
                    <h1>SOMOS UNA EMPRESA ENFOCADA EN EL CONFORT DEL CLIENTE</h1>
                </div>
                <section className="socials">
                    <a 
                        href="https://www.facebook.com/"
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bi bi-facebook" />
                    </a>
                    <a 
                        href="https://wa.me/593969626579"
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bi bi-whatsapp" />
                    </a>
                    <a 
                        href="https://www.instagram.com/" 
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bi bi-instagram" />
                    </a>
                </section>
            </section>
            <section className="home-info">
                <img src={logo} alt="logo" />
                <h2>SOMOS UNA EMPRESA ENFOCADA EN EL CONFORT DEL CLIENTE</h2>
                <p>Seriedad, cumplimiento y eficiencia</p>
            </section>
            <div className="row" id="row-correction">
                <div className="col-lg kairos-col">
                    <div className="kairos-col-item">
                        <img src={building3} className="home-kairos" alt="building" />
                    </div>
                </div>
                <div className="col-lg kairos-col">
                    <div className="kairos-info">
                        <img src={logoBig} alt="kairos" className="mobile-hidden " />
                        <img src={logoBigMobile} alt="kairos" className="kairos-mobile desktop-hidden" />
                        <p>{info}</p>
                    </div>
                </div>
            </div>     
            <section className="home-services row" id="row-correction">
                <div className="col-lg">
                    <div className="services">
                        <label>SERVICIOS:</label>
                        <span>
                            <strong>1. &nbsp;</strong>
                            Diseños y Proyectos:<span>(Urbanismo de Obras Nuevas, Arquitectura de Obra Nueva, Arquitectura de obra Existente, Diseño de interiores).</span>
                        </span>
                        <span>
                            <strong>2. &nbsp;</strong>
                            Dirección Arquitectónica.
                        </span>
                        <span>
                            <strong>3. &nbsp;</strong>
                            Construcción: Dirección Técnica.
                        </span>
                        <span>
                            <strong>4. &nbsp;</strong>
                            Administración de Construcción.
                        </span>
                    </div>
                </div>
                <div className="col-lg">
                    <img src={circles} alt="circles" />
                </div>
            </section>
            <section className="home-mision row" id="row-correction">
                <div className="col-lg">
                    <div className="mision mobile-hidden">
                        <label>QUIÉNES SOMOS</label>
                        <h2>Misión:</h2>
                        <p>Ofrecer servicos arquitectónicos de alta gama que satisfacen las necesidades del cliente a precios competitivos dentro del mercado.</p>
                        {/* <button>LEER MÁS</button> */}
                        <Link className="rrd-link" to="/">LEER MÁS</Link>
                    </div>
                </div>
                <div className="col-lg">
                    <img src={gabriel} alt="circles" />
                </div>
            </section>
            <ConctactForm onHome />
        </>
    )
}

export default Home
