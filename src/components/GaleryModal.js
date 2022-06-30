// import galeria9 from '../assets/images/galeria9.jpg'


const GaleryModal = ({ image }) => {

    const closeModal = () => {
        const modal = document.getElementById('modal')
        modal.classList.remove('show')
    }

    return (
        <div className="modal fade" id="modal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <i className="bi bi-x-circle modal-close" onClick={closeModal} />
                        <img src={image} alt="galeria" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default GaleryModal
