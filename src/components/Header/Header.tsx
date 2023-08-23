import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import Navbar from "../Navbar/Navbar"

interface Props {
    activeNavbar: boolean
}

function Header({ activeNavbar } : Props) {
    return (
        <motion.header
            className="w-full h-[100px] relative flex flex-col md:flex-row md:justify-evenly justify-center items-center mt-[20px] md:px-0 px-5"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Link to="/">
                <h1 className="text-[2.3rem] font-bold">EUGE FOTO{window.screen.width > 375 ? 'GRAFIA' : ''}</h1>
            </Link>
            {activeNavbar
                ? <Navbar />
                : <a href="/non-animation" className="text-xl hover:text-orange-200 font-medium">Volver</a>}
        </motion.header>
    )
}

export default Header
