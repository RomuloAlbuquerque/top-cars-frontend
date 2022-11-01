import { NavLink } from 'react-router-dom'
import './styles.css'

const Navbar = ()=>{
    return (
        <div className='main-navbar-container'>
            <div className='content-navbar-container'>
            <div className='logo-navbar-container'>
                <a href='link'>Top-Cars</a>
            </div>
            <div className='menu-navbar-container'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='catalogo'>Catálogo</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar