import contactImage from '../assets/images/contactos.jpg'


const ContactForm = ({ onHome }) => {

    const sendForm = e => {
        e.preventDefault()
        console.log('form submitted')
    }

    return (
        <section className={onHome ? 'home-form' : 'home-form-2'}>
            <div className="row" id="row-correction">
                <div className={`col-lg ${onHome ? ' mobile-hidden' : ''}`}>
                    <img src={contactImage} alt="galeria" />
                </div>
                <div className="col-lg">
                    <form onSubmit={sendForm}>
                        <h2>En INOVA Constructores</h2>
                        <p>Deseamos escucharte, por favor comunicate con nosotros.</p>
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="Kairos" />
                            <label>Nombre</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="0987654321" />
                            <label>Teléfono</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="name@example.com" />
                            <label>Correo Electrónico</label>
                        </div>
                        <div className="form-floating">
                            <textarea type="text" className="form-control msg" placeholder="mensaje" />
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
