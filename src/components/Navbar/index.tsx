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
                        <a href='link'>Home</a>
                    </li>
                    <li>
                        <a href='link'>Catálogo</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar