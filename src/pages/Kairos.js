import karios from '../assets/images/kairos-black.svg'
import kairos1 from '../assets/images/kairos1.jpg'
import kairos2 from '../assets/images/kairos2.jpg'
import kairos3 from '../assets/images/kairos3.jpg'
import kairos4 from '../assets/images/kairos4.jpg'
import plano1 from '../assets/images/plano1.svg'
import plano2 from '../assets/images/plano2.svg'
import plano3 from '../assets/images/plano3.svg'
import amenities1 from '../assets/images/amenities1.png'
import amenities2 from '../assets/images/amenities2.png'
import amenities3 from '../assets/images/amenities3.png'
import amenities4 from '../assets/images/amenities4.png'
import amenities5 from '../assets/images/amenities5.png'
import map from '../assets/images/map.png'

import Flickity from 'react-flickity-component'

const media = [
    amenities1, amenities2, amenities3, amenities4, amenities5,
    amenities1, amenities2, amenities3, amenities4, amenities5 
]

const Kairos = () => {
    return <>
        <div className="kairos">
            <h1>DEPARTAMENTOS</h1>
            <img src={karios} className="kairos-logo" alt="kairos" />
            <section className="kairos-header">
                <img src={kairos1} alt="kairos" />
            </section>
            <section className="kairos-content">
                <div className="row" id="row-correction">
                    <div className="col-lg-6">
                        <img src={kairos2} alt="kairos" />
                    </div>
                    <div className="col-lg-6">
                        <div className="kairos-text">
                            <p>
                                KAIROS esta pensado para ser un proyecto innovador que va al ritmo de la vida ejecutiva, por su diseño arquitectónico nos permite aprovechar al máximo la luminosidad y disfrutar de una hermosa vista en cada uno de los departamentos, se encuentra cuidadosamente diseñado para aprovechar al máximo cada espacio, contamos con una altura de 2.60m2 en cada espacio del departamento, proporcionando asi un ambiente mas agradable.
                            </p>
                            <p>
                                KAIROS se encuentra ubicado en el corazón financiero de la ciudad, enmarcado entre las calles Roma y Brújula a dos cuadras del Quicentro Shopping, característica que hace de nuestro proyecto un lugar privilegiado y exclusivo donde convergen la tranquilidad y la cercanía a los más importantes Centros Financieros y de Negocios de Quito, como lo son: Plataforma Gubernamental, Parque la Carolina, Bulevar de las Naciones Unidas, Megamaxi 6 de Diciembre, Supercines, supermercados, restaurantes, importantes colegios y vías de acceso; que harán de KAIROS el lugar perfecto y exclusivo que tu y tu familia necesitan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="kairos-features">
                <div className="row" id="row-correction">
                    <div className="col-lg-6">
                        <div className="kairos-text-2">
                            <h2>CARACTERÍSTICAS</h2>
                            <p>
                                KAIROS esta pensado para ser un proyecto innovador que va al ritmo de la vida ejecutiva, por su diseño arquitectónico nos permite aprovechar al máximo la luminosidad y disfrutar de una hermosa vista en cada uno de los departamentos, se encuentra cuidadosamente diseñado para aprovechar al máximo cada espacio, contamos con una altura de 2.60m2 en cada espacio del departamento, proporcionando asi un ambiente mas agradable.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={kairos3} alt="kairos" />
                    </div>
                </div>
            </section>
            <section className="kairos-plans">
                <div className="row" id="row-correction">
                    <div className="col-lg-6">
                        <h2>Tres Dormitorios</h2>
                        <span className="area">Area Útil</span>
                        <span>100.35m²</span>
                        <img src={plano1} alt="kairos" />
                    </div>
                    <div className="col-lg-6">
                        <h2>Dos Dormitorios</h2>
                        <span className="area">Area Útil</span>
                        <span>68.71m²</span>
                        <img src={plano2} alt="kairos" />
                    </div>
                </div>
            </section>
            <section className="kairos-suite">
                <div className="row" id="row-correction">
                    <div className="col-lg-6">
                        <h2>Suite</h2>
                        <span className="area">Area Útil</span>
                        <span>51.58m²</span>
                        <img src={plano3} alt="kairos" />
                    </div>
                    <div className="col-lg-6">
                        <img src={kairos4} alt="kairos" />
                    </div>
                </div>
            </section>
        </div>
        <section className="amenities">
            <h2>AMENITIES</h2>
            <Flickity 
                className="amenities-carousel" 
                options={{
                    accessibility: false,
                    initialIndex: 2,
                    autoPlay: 7000,
                    groupCells: 1,
                    pageDots: false,
                    prevNextButtons: false,
                    wrapAround: 'fill'
                }}
            >
                {media.map((img, i) => <img key={i} src={img} alt="Amenities" />)}
            </Flickity>
        </section>
        <section className="kairos">
            <section className="location">
                <h2>UBICACIÓN</h2>
                <img src={map} alt="kairos" />
            </section>
        </section>
    </>
}

export default Kairos
