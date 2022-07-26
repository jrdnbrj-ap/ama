import galeria1 from '../assets/images/galeria/galeria1.jpg'
import galeria2 from '../assets/images/galeria/galeria2.jpg'
import galeria3 from '../assets/images/galeria/galeria3.jpg'
import galeria4 from '../assets/images/galeria/galeria4.png'
import galeria5 from '../assets/images/galeria/galeria5.jpg'
import galeria6 from '../assets/images/galeria/galeria6.jpg'
import galeria7 from '../assets/images/galeria/galeria7.png'
import galeria8 from '../assets/images/galeria/galeria8.jpg'
import galeria9 from '../assets/images/galeria/galeria9.jpg'
import galeria10 from '../assets/images/galeria/galeria10.jpg'
import galeria11 from '../assets/images/galeria/galeria11.jpg'
import galeria12 from '../assets/images/galeria/galeria12.jpg'
import galeria13 from '../assets/images/galeria/galeria13.jpg'
import galeria14 from '../assets/images/galeria/galeria14.png'
import galeria15 from '../assets/images/galeria/galeria15.jpg'

import { useState } from 'react'

import GaleryModal from '../components/GaleryModal'

const images = [
    galeria1, galeria2, galeria3, galeria4, galeria5, 
    galeria6, galeria7, galeria8, galeria9, galeria10, 
    galeria11, galeria12, galeria13, galeria14, galeria15
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
