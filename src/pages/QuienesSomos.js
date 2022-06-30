import { useEffect } from 'react';
import MisionVision from '../components/MisionVision';

import somos1 from '../assets/images/somos1.jpg'
import somos2 from '../assets/images/somos2.jpg'
import somos3 from '../assets/images/somos3.jpg'
import somos4 from '../assets/images/somos4.jpg'
import quienes from '../assets/images/quienes.jpg'
import inovaSensaciones from '../assets/videos/inova_sensaciones.mp4'


const QuienesSomos = () => {

    useEffect(() => {
        const video = document.getElementById('inova-sensaciones')
        video.play()
    }, [])

    return (
        <>
            <section className="us-header" />
            <section className="nuestra-historia">
                <h2>NUESTRA HISTORIA</h2>
                <h3>ACERCA DE NOSOTROS</h3>
                <p>Somos una Empresa Constructora e Inmobiliaria de alto rendimiento, conformada por profesionales de amplia experiencia y sobre todo grandes resultados. En nuestros 20 años hemos participado en más de 20 proyectos inmobiliarios de construcción y comercialización que han resultado de éxito en su totalidad. </p>
                <p>Nuestro objetivo es atender y resolver las necesidades de vivienda, ofreciendo a nuestros clientes inmuebles estratégicamente ubicados, de altos estándares, bien construidos, con valores agregados y a precios competitivos, siempre pensando en ofrecer inversiones seguras.</p>
            </section>
            <MisionVision path="quienes-somos" />
            <section className="valores">
                <h3>VALORES CORPORATIVOS</h3>
                <p>Inova constructores esta conformada por profesionales que brindan a cada cliente un trato único que le permite tener una experiencia única. En nuestros más de 20 de años de experiencia nuestros valores nos han permitido lograr proveer más de 2000 hogares esto gracias al profesionalismo y dedicación del equipo de trabajo que se ha conformado para al ejecución de cada proyecto</p>
            </section>
            <section className="sensaciones">
                <video muted loop id="inova-sensaciones">
                    <source src={inovaSensaciones} type="video/mp4" />
                    <source src={inovaSensaciones} type="video/ogg" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </section>
            <section className="row" id="row-correction">
                <div className="col-lg-6 quienes-info">
                    <div>
                        <h2>Experiencia</h2>
                        <p>Nuestra experiencia nos ha permitido lograr proveer más de 2000 hogares esto gracias al profesionalismo y dedicación del equipo de trabajo que se ha conformado para al ejecución de cada proyecto.</p>

                        <h2>Profesionalismo</h2>
                        <p>Nuestro equipo de trabajo es de profesionales que brindan a cada cliente un trato único que le permite tener una experiencia única. En nuestros más de 20 de años de experiencia nuestros valores nos han permitido lograr proveer más de 2000 hogares esto gracias al profesionalismo y dedicación del equipo de trabajo que se ha conformado para al ejecución de cada proyecto.</p>

                        <h2>Compromiso</h2>
                        <p>Nuestro equipo de trabajo es de profesionales que brindan a cada cliente un trato único que le permite tener una experiencia única. En nuestros más de 20 de años de experiencia nuestros valores nos han permitido lograr proveer más de 2000 hogares esto gracias al profesionalismo y dedicación del equipo de trabajo que se ha conformado para al ejecución de cada proyecto.</p>

                        <h2>Inmobiliarias</h2>
                        <p>Nuestro equipo de trabajo es de profesionales que brindan a cada cliente un trato único que le permite tener una experiencia única. En nuestros más de 20 de años de experiencia nuestros valores nos han permitido lograr proveer más de 2000 hogares esto gracias al profesionalismo y dedicación del equipo de trabajo que se ha conformado para al ejecución de cada proyecto.</p>
                    </div>
                </div>
                <div className="col-lg-6 quienes-img">
                    <img src={quienes} alt="quienes somos" />
                </div>
            </section>
            <section className="somos">
                <div className="row">
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos1} alt="somos1" />
                            <div className="somos-hover">
                                <h2>ALFONSO</h2>
                                <h3>GARCÍA</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <h3 className="somos-names">ALFONSO</h3>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos2} alt="somos2" />
                            <div className="somos-hover">
                                <h2>WENDY</h2>
                                <h3>JÁCOME</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <h3 className="somos-names">WENDY</h3>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos3} alt="somos3" />
                            <div className="somos-hover">
                                <h2>ELIZABETH</h2>
                                <h3>LEÓN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <h3 className="somos-names" id="elizabeth">ELIZABETH</h3>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <div className="somos-container">
                            <img src={somos4} alt="somos4" />
                            <div className="somos-hover">
                                <h2>GUILLERMO</h2>
                                <h3>ENRIQUEZ</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <h3 className="somos-names" id="guillermo">GUILLERMO</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuienesSomos
