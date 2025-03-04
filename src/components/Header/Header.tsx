import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import Navbar from "../Navbar/Navbar"

interface Props {
    activeNavbar: boolean
}

function Header({ activeNavbar } : Props) {
    return (
        <motion.header
            className="w-full relative flex flex-col md:flex-row md:justify-between justify-center items-center mt-[20px] px-10 md:px-[15%]"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Link to="/non-animation">
                {/* <h1 className="text-[2.3rem] font-bold">EUGE FOTO{window.screen.width > 375 ? 'GRAFIA' : ''}</h1> */}
                <h1 className="relative top-0 text-[2.8rem] md:text-[2.3rem] font-bold">
                    EUGENIA <span className="relative -top-5 sm:top-0">SILVESTRI</span>
                </h1>
                <span className="absolute top-24 sm:top-12 md:top-10">FOTOGRAFIA</span>
            </Link>
            {activeNavbar
                ? <Navbar />
                : <a href="/non-animation" className="text-xl hover:text-orange-200 font-normal hover:font-medium hover:underline duration-300 mt-20 md:mt-0">Volver</a>}
        </motion.header>
    )
}

export default Header
