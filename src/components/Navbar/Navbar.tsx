function Navbar() {
    const linkStyle = "navbar-link hover:text-orange-200 font-normal hover:font-medium hover:underline ";

    return (
        <nav className="w-full md:w-[45%] mt-8 md:mt-0">
            <ul className="flex w-full md:justify-evenly justify-around">
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
