import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import inovaExperiencia from '../assets/videos/inova_experiencia.mp4'
import inovaExperienciaOgg from '../assets/videos/inova_experiencia.ogg'

import logo from '../assets/images/logo.svg'
import building3 from '../assets/images/building3.jpg'
import building5 from '../assets/images/building5.jpg'
import building6 from '../assets/images/building6.jpg'
import building7 from '../assets/images/building7.jpg'
import building8 from '../assets/images/building8.jpg'
import kairos from '../assets/images/kairos.svg'

import MisionVision from '../components/MisionVision'
import ConctactForm from '../components/ContactForm'


const Home = () => {

    const kairosForm = 'Concebido para la vida ejecutiva de alto rendimiento en la zona de la mas alta plusvalia de ciudad. KAIROS se destaca por su exclusividad, diseño y ubicación estrategica. Su diseño permite aprovechar al maximo la luminosidad y disfrutar de una hermosa vista en cada uno de los departamentos.'

    useEffect(() => {
        const video = document.getElementById('inova-experiencia')
        video.play()
    }, [])

    return (
        <>
            <section className="video-container">
                <video muted loop id="inova-experiencia">
                    <source src={inovaExperiencia} type="video/mp4" />
                    <source src={inovaExperienciaOgg} type="video/ogg" />
                </video>
                <div className="video-text">
                    <h1>CONSTRUYENDO HOGARES</h1>
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
                <h2>ENFOCADOS EN CREAR AMBIENTES INNOVADORES</h2>
                <p>Somos una compañía constructora que cuenta con amplia experiencia en la ejecución de proyectos de calidad y con la capacidad de enfrentar nuevos retos los cuales nos impulsan a seguir creciendo como una empresa innovadora que brinda las mejores condiciones de vida a los quiteños.</p>
                <Link to="/contactos">
                    <button id="llamanos">
                        <span>QUIÉNES SOMOS</span>
                    </button>
                </Link>
                <Link to="/proyectos">
                    <button id="departamentos">
                        <span>PROYECTOS</span>
                    </button>
                </Link>
            </section>
            <div className="row" id="row-correction">
                <div className="col-lg kairos-col">
                    <div className="kairos-col-item">
                        <img src={building3} className="home-kairos" alt="building" />
                    </div>
                </div>
                <div className="col-lg kairos-col">
                    <div className="kairos-info">
                        <img src={kairos} className="kairos-logo" alt="kairos" />
                        <p>{kairosForm}</p>
                        <Link to="/contactos">
                            <button id="contactanos">
                                <span>Contáctanos</span>
                            </button>
                        </Link>
                        <Link to="/kairos">
                            <button id="ver-mas">
                                <span>Ver más</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>     
            <section className="home-proyectos">
                <h2>PROYECTOS</h2>
                <img src={building5} id="b-5" alt="building" />
                <img src={building6} id="b-6" alt="building" />
                <img src={building7} id="b-7" alt="building" />
                <img src={building8} id="b-8" className="mobile-hidden" alt="building" />
                <button>
                    <span>SIGUIENTE</span>
                </button>
            </section>
            <section className="mision-vision-home">
                <MisionVision />
            </section>
            <section className="home-nosotros">
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
            </section>
            <ConctactForm onHome />
        </>
    )
}

export default Home
