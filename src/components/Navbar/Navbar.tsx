function Navbar() {
    return (
        <nav className="w-full md:w-[30%]">
            <ul className="flex w-full md:justify-between justify-around">
                <li className="navbar-item">
                    <a href="#trabajos" className="navbar-link">
                      Proyectos
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#experiencia" className="navbar-link">
                      Experiencia
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#testimonios" className="navbar-link">
                      Clientes
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
