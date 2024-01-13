function Navbar() {
    const linkStyle = "navbar-link hover:text-orange-200";

    return (
        <nav className="w-full md:w-[30%]">
            <ul className="flex w-full md:justify-between justify-around">
                <li className="navbar-item">
                    <a href="#trabajos" className={linkStyle}>
                      Proyectos
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#experiencia" className={linkStyle}>
                      Experiencia
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className={linkStyle}>
                      Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
