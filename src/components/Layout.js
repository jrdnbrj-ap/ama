import { useLocation } from "react-router-dom"

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    
    const location = useLocation()
    
    const pathsWithFooter = [
        '/',
        '/quienes-somos',
        '/casas',
        '/proyectos',
        '/galeria',
        '/contactos',
        '/kairos'
    ]

    return <>
        <Navbar />
        {children}
        { pathsWithFooter.includes(location.pathname) && <Footer /> }
    </>
}

export default Layout
