import building3 from '../assets/images/building3.png'

import { useState } from 'react'

import GaleryModal from '../components/GaleryModal'

const images = [
    building3, building3, building3, building3, building3,
    building3, building3, building3, building3, building3,
    building3, building3, building3, building3, building3,
]

const Galeria = () => {

    const [selectedImage, setSelectedImage] = useState(null)

    const openModal = img => {
        setSelectedImage(img)

        const modal = document.getElementById('modal')
        modal.classList.add('show')
    }

    return <>
        <GaleryModal image={selectedImage} />
        <div className="galeria">
            <h1>GALERÍA</h1>
            <div className="galeria-container">
                {images.map((image, i) =>
                    <img 
                        key={i} src={image} id={`galeria${i+1}`} alt="galeria" 
                        onClick={() => openModal(image)} 
                    />
                )}
            </div>
        </div>
    </>
}

export default Galeria
