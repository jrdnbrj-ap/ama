const MisionVision = ({ path }) => {
    
    const className = path === 'quienes-somos' ? 'mision-quienes-somos' : '';

    const mision = 'Construimos la mejor alternativa de vivienda en términos de ubicación, calidad y precio, satisfaciendo plenamente a cada uno de nuestros clientes, esto se ha logra con el desarrollo integralmente un equipo de trabajo exitoso.'
    const vision = 'Ser la empresa líder de construcción y ventas en la ciudad de Quito, manteniendo un estándar de calidad y satisfacción que le brinde a cada cliente traquilidad en su inversión.'

    return <>
        <section className="mision-vision">
            <h2 className={className}>MISIÓN / VISIÓN</h2>
            <div className="row" id="row-correction">
                <div className="col-lg">
                    <span>M</span>
                    <p>{mision}</p>
                </div>
                <div className="col-lg">
                    <span>V</span>
                    <p>{vision}</p>
                </div>
            </div>
        </section>
    </>
}

export default MisionVision
