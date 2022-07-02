import { Link } from 'react-router-dom'

import Home1 from '../assets/images/Home1.png'

import logo from '../assets/images/logo.svg'
import building3 from '../assets/images/building3.png'
import building5 from '../assets/images/building5.jpg'
import building6 from '../assets/images/building6.jpg'
import building7 from '../assets/images/building7.jpg'
import building8 from '../assets/images/building8.jpg'
import logoBig from '../assets/images/logo-big.svg'
import logoBigMobile from '../assets/images/logo-big-mobile.svg'

import MisionVision from '../components/MisionVision'
import ConctactForm from '../components/ContactForm'


const Home = () => {

    const kairosForm = 'Somos una empresa cuyo punto focal gira alrededor del confort del cliente. Buscamos la complacencia de las necesidades y anhelos del usuario, apuntando siempre a la excelencia en cada uno de nuestros proyectos. Nuestro enfoque prioriza optimizar todo presupuesto para llegar a resultados de la mayor calidad, estética y comodidad.'

    return (
        <>
            <section className="video-container">
                <img src={Home1} alt="Home" id="inova-experiencia" />
                <div className="video-text">
                    <h1>SOMOS UNA EMPRESA ENFOCADA &nbsp; EN EL CONFORT DEL CLIENTE</h1>
                </div>
                <section className="socials">
                    <a 
                        href="https://www.facebook.com/Inova-Constructores-109525017849374/"
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bi bi-facebook" />
                    </a>
                    <a 
                        href="https://wa.me/593998799739"
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bi bi-whatsapp" />
                    </a>
                    <a 
                        href="https://www.instagram.com/inova_constructores/" 
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
                        <p>{kairosForm}</p>
                        {/* <Link to="/contactos">
                            <button id="contactanos">
                                <span>Contáctanos</span>
                            </button>
                        </Link>
                        <Link to="/kairos">
                            <button id="ver-mas">
                                <span>Ver más</span>
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>     
            {/* <section className="home-proyectos">
                <h2>PROYECTOS</h2>
                <img src={building5} id="b-5" alt="building" />
                <img src={building6} id="b-6" alt="building" />
                <img src={building7} id="b-7" alt="building" />
                <img src={building8} id="b-8" className="mobile-hidden" alt="building" />
                <button>
                    <span>SIGUIENTE</span>
                </button>
            </section> */}
            {/* <section className="mision-vision-home">
                <MisionVision />
            </section> */}
            {/* <section className="home-nosotros">
                <h2>MÁS SOBRE NOSOTROS</h2>
                <div className="row">
                    <div className="cola">
                        <div className="data-text">
                            Clientes Atendidos
                        </div>
                        <div className="home-numbers">
                            36.218
                        </div>
                    </div>
                    <div className="cola">
                        <div className="data-text">
                            Unidades Vendidad y Arrendadas
                        </div>
                        <div className="home-numbers">
                            36.218
                        </div>
                    </div>
                    <div className="cola">
                        <div className="data-text">
                            Años de experiencia
                        </div>
                        <div className="home-numbers">
                            36.218
                        </div>
                    </div>
                    <div className="cola">
                        <div className="data-text">
                            Proyectos Comercializados
                        </div>
                        <div className="home-numbers">
                            36.218
                        </div>
                    </div>
                    <div className="cola">
                        <div className="data-text">
                            Proyectos Construidos
                        </div>
                        <div className="home-numbers">
                            36.218
                        </div>
                    </div>
                </div>
            </section> */}
            <ConctactForm onHome />
        </>
    )
}

export default Home
