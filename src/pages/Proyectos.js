import building6 from '../assets/images/building6.jpg'
import building12 from '../assets/images/building12.jpg'
import pool from '../assets/images/pool.jpg'
import galeria4 from '../assets/images/galeria4.jpg'
import building13 from '../assets/images/building13.jpg'


const Proyectos = () => {
    return (
        <>
            <section className="proyectos">
                <h1 id="nuestros">NUESTROS</h1>
                <h1 id="proyectos">PROYECTOS</h1>
                <h1 id="nuestros">COMERCIALIZADOS</h1>
                <div className="row" id="row-correction">
                    <div className="col-lg-6 col-sm-12 card">
                        <div className="card--image">
                            <img src={building6} alt="building10" />
                        </div>
                        <div className="card--info info--1">
                            <span className="info--text">Espacioso</span>
                            <div className="icon">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="info--image">
                                <img src={building6} alt="info" />
                            </div>
                        </div>
                        <div className="card--info info--2">
                            <span className="info--text">Moderno</span>
                            <div className="icon">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="info--image">
                                <img src={building6} alt="info" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 proyectos-p">
                        <h2>KIARA</h2>
                        <p>Edificio diseñado y pensado para brindar comodidad y exclusividad ubicado en el valle de Cumbayá, cuenta con 15 unidades de departamentos en 3 pisos, su diseño de vanguardia responde a la vida práctica y cómoda del valle del Cumbayá.</p>
                    </div>
                </div>
                <div className="row" id="row-correction">
                    <div className="col-lg-6 col-sm-12 card">
                        <div className="card--image">
                            <img src={building12} alt="building12" />
                        </div>
                        <div className="card--info info--1">
                            <span className="info--text">Elegante</span>
                            <div className="icon">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="info--image">
                                <img src={building12} alt="info" />
                            </div>
                        </div>
                        <div className="card--info info--2">
                            <span className="info--text">Innovador</span>
                            <div className="icon">
                                <i className="bi bi-plus"></i>
                            </div>
                            <div className="info--image">
                                <img src={building12} alt="info" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 proyectos-p">
                        <h2>CIARA</h2>
                        <p>Exclusivo edificio ubicado en el valle de Cumbayá sector La Primavera, nuestro diseño y arquitectura maneja una extructura dinámica y práctica, parte de nuevo urbanismo de este valle se encuentra ubicado dentro de la urbanización Vista Grande y comprende 6 departamentos en 3 pisos, espectaculares.</p>
                    </div>
                </div>
            </section>
            <section className="edificios">
                <div className="edificios-intro">
                    <p>Hemos trabajado con proyectos de toda escala, desde pequeños de 6 unidades hasta proyectos grandes de más de 500 unidades. Proporcionamos soluciones a la medida de cada proyecto o unidad de vivienda considerando las metas comerciales.</p>
                </div>
                <div className="row edificios-row" id="row-correction">
                    <div className="col-lg-6 edificios-col">
                        <img src={pool} alt="pool" />
                    </div>
                    <div className="col-lg-6 edificios-col">
                        <div className="edificios-text">
                            <h2>Edificio de Oficinas</h2>                    
                            <h3>Los Shyris</h3>
                            <p>Edificio de departamentos y oficinas ubicado frente al parque La Carolina. Cuenta con más de 160 unidades en 16 pisos.</p>
                            
                            <h2>Edificio de Oficinas</h2>                    
                            <h3>Finlandia</h3>
                            <p>Ubicado junto al Hotel Finlandia, Edificio de 10 pisos con 40 unidades de oficinas</p>
                            
                            <h2>Edificio de Oficinas</h2>                    
                            <h3>La Carolina</h3>
                            <p>Cuenta con 14 pisos y 85 oficinas. Ubicado frente al parque la carolina.</p>

                            <h2>Edificio de Departamentos</h2>                    
                            <h3>La Carolina</h3>
                            <p>Edificio de departamento ubicado en el corazón comercial de Quito sector La Carolina. Cuenta con más de 90 unidades de departamentos. </p>                    
                            
                            <h2>Proyecto Masivo Centro Norte</h2>                    
                            <h3>El Inca</h3>
                            <p>Estratégicamente ubicado en el centro norte de la ciudad. Cuenta con 550 unidades de vivienda y más 5000 m² de áreas comunales.</p>
                            
                            <h2>Edificio CIARA</h2>                    
                            <h3>Vista Grande</h3>
                            <p className="last-text">Exclusivo edificio de vivienda de lujo dentro de la urbanización Vista Grande. Esta compuesto por 6 departamentos.</p>
                        </div>
                    </div>
                </div>
                <div className="row edificios-row" id="row-correction">
                    <div className="col-lg-6 order-2 order-lg-1 edificios-col">
                        <div className="edificios-construidos">
                            <h2>PROYECTOS CONSTRUIDOS</h2>                    
                            <p className="last-text">Con amplia experiencia a nivel gerencial, principalmente en el área comercial. Hemos liderado grandes proyectos inmobiliarios a lo largo de estos últimos 20 años en la ciudad de Quito, coordinando en la elaboración, desarrollo y ejecución de proyectos y estrategias para la eficaz construcción y comercialización.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 edificios-col">
                        <img src={building13} alt="pool" />
                    </div>
                </div>
                <div className="row edificios-row" id="row-correction">
                    <div className="col-lg-6 edificios-col">
                        <img src={galeria4} alt="pool" />
                    </div>
                    <div className="col-lg-6 edificios-col">
                        <div className="edificios-text">
                            <h2>PROYECTO EN CUMBAYÁ</h2>                    
                            <p>En noviembre del 2015, INOVA CONSTRUCTORES recibió el proyecto La Victoria con más de 100 unidades habitacionales, diseñado por el renombrado arquitecto Felipe Londoño. El proyecto ya llevaba construido la primera fase, 13 casas diseñadas con una arquitectura innovadora que tomaba como protagonista a una sala comedor doble-altura, acompañadas de balcones aterrazados al estilo mediterráneo.</p>
                            <p className="last-text">La arquitectura tomó fortaleza en el desnivel del terreno, la cual utilizaba un escalonamiento gradual para dar una hermosa vista a cada uno de los departamentos. Proyecto exclusivo nos permitió tener un reto importante para la comercialización. Siendo esto una de las características distintivas de proyecto, escogimos estrategias para la comercialización brindando un proyecto con estrategia exitosa.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Proyectos
