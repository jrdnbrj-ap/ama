import gabriel from '../assets/images/gabriel.jpg'


const QuienesSomos = () => {

    return (
        <>
            <section className="quienes-somos">
                <div className="row" id="row-correction">
                    <div className="col-lg col-md-12 quienes-back mobile-hidden">
                        <h1>QUIÉNES <br />SOMOS</h1>
                    </div>
                    <div className="col-lg col-md-12">
                        <img src={gabriel} alt="gabriel" />
                    </div>
                </div>
                <div className="row mis-vis" id="row-correction">
                    <div className="col-lg col-md-12">
                        <label>Misión:</label>
                        <p>Ofrecer servicios arquitectónicos de alta gama que satisfacen las necesidades del cliente a precios competitivos dentro del mercado.</p>
                    </div>
                    <div className="col-lg col-md-12">
                        <label>Visión:</label>
                        <p>Ser una empresa de reconocimiento en su arquitectura por sus servicios que garanticen calidad, comodidad y sostenibilidad para sus usuarios, así mismo, siendo reconocidos por sus diseños de alta distinción.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuienesSomos
