import home from '../assets/images/Home1.png'
import proy21 from '../assets/images/proy-21.png'
import proy22 from '../assets/images/proy-22.png'
import proy23 from '../assets/images/building3.png'
import proy3 from '../assets/images/proy-3.png'
import proy41 from '../assets/images/proy-41.png'
import proy42 from '../assets/images/proy-42.png'
import proy52 from '../assets/images/proy-52.png'
import const1 from '../assets/images/construccion1.png'
import const2 from '../assets/images/construccion2.png'
import const3 from '../assets/images/construccion3.png'
import const4 from '../assets/images/construccion4.png'


const Proyectos = () => {
    return (
        <>
            <section className="proyectos">
                <div className="row proy-1" id="row-correction">
                    <div className="col-lg">
                        <img src={home} alt="building" />
                    </div>
                    <div className="col-lg">
                        <div className="__info">
                            <label>VISUALIZACIÓN DIGITAL:</label>
                            <p>Representación digital de espacio arquitectónicos en alta calidad y detalle, utilizando programas de alta fidelidad como V Ray 3D Max, que permiten la aproximación más realista de cualquier proyecto. Las mismas que pueden usarse para una mejor comprensión del mismo, o a su vez como publicidad en su generalidad.</p>
                        </div>
                    </div>
                </div>
                <div className="row proy-2" id="row-correction">
                    <div className="col-lg">
                        <img src={proy21} alt="building" />
                    </div>
                    <div className="col-lg proy-2-col">
                        <img src={proy22} alt="building" />
                        <img src={proy23} alt="building" />
                    </div>
                </div>
                <div className="row proy-3" id="row-correction">
                    <div className="col-lg">
                        <div className="__info">
                            <label>FEDIMETAL:</label>
                            <p>Proyecto Centro de Innovación en Tecnologías Constructivas y Agrícolas</p>
                            <p>Segundo Lugar Nivel Nacional Concurso Fedimetal.</p>
                            <p>Proyecto Colaborativo (Arq. Alvarez, Arq. Porras, Arq. Rangles, Arq. Romero)</p>
                            <p>Como concepto de adopto una de las cualidades más importantes del acero como eje estructurante, su maleabilidad. Esta propiedad vuelve un material sumamente versátil, con variadas posibilidades de aplicación, por lo tanto, desde la concepción volumétrica del conjunto, fueron las dinámicas del lugar las que fueron moldeando los diferentes espacios.</p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <img src={proy3} alt="building" />
                    </div>
                </div>
                <div className="row proy-4" id="row-correction">
                    <div className="col-lg">
                        <img src={proy41} alt="building" className="asd" />
                    </div>
                    <div className="col-lg">
                        <img src={proy42} alt="building" />
                    </div>
                </div>
                <div className="proy-5">
                    <img src={proy52} alt="building" />
                    <div>
                        <span>DISEÑO DE INTERIORES</span>
                    </div>
                </div>
                <div className="row proy-6" id="row-correction">
                    <div className="col-lg __info">
                        <div>
                            <label>CONSTRUCCIÓN:</label>
                            <p>Dirección arquitectónica para construcción en donde nos aseguramos de cumplir con los estándares de calidad y seguimiento adecuado a lo establecido en planos. Supervisión constructiva en donde además de sigue con estándares técnico-constructivos establecidos por ingenieros y normativas vigentes. Nos aseguramos que su obra se culmine con los estándares más altos de calidad.</p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="images-grid">
                            <img src={const1} className="img1" alt="construccion" />
                            <img src={const2} className="img2" alt="construccion" />
                            <img src={const3} className="img3" alt="construccion" />
                            <img src={const4} className="img4" alt="construccion" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Proyectos
