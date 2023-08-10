function Navbar() {
    return (
        <nav className="w-full md:w-[30%]">
            <ul className="flex w-full md:justify-between justify-around">
                <li className="navbar-item">
                    <a href="#sobremi" className="navbar-link">
                      Sobre mí
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#trabajos" className="navbar-link">
                      Trabajos
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#contacto" className="navbar-link">
                      Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
