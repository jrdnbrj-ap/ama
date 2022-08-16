import contactImage from '../assets/images/proy-22.png'


const ContactForm = ({ onHome }) => {

    return (
        <section className="home-form">
            <div className="row" id="row-correction">
                <div className={`col-lg ${onHome ? ' mobile-hidden' : ''}`}>
                    <img src={contactImage} alt="galeria" />
                </div>
                <div className="col-lg">
                    <form 
                        action="https://app.headlessforms.cloud/api/v1/form-submission/uMMkYFlSGs" 
                        method="POST"
                    >
                        <h2>Unidad, cuidado con el ambiente, calidad, excelencia.</h2>
                        <p>Estamos listo para atenderte</p>
                        <div className="form-floating">
                            <input 
                                type="text" className="form-control" 
                                placeholder="Nombre" name="name" 
                            />
                            <label>Nombre</label>
                        </div>
                        <div className="form-floating">
                            <input 
                                type="text" className="form-control" 
                                placeholder="0987654321" name="phone" 
                            />
                            <label>Teléfono</label>
                        </div>
                        <div className="form-floating">
                            <input 
                                type="email" className="form-control" 
                                placeholder="name@example.com" name="email" 
                            />
                            <label>Correo Electrónico</label>
                        </div>
                        <div className="form-floating">
                            <textarea 
                                type="text" className="form-control msg" 
                                placeholder="mensaje" name="message" 
                            />
                            <label>Mensaje</label>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
