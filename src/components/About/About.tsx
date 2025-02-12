import { motion } from "framer-motion"
import { BASE_URL } from "../../utils/consts"

function About() {
    const size = window.screen.width

    return (
        <section className="w-full relative px-0 lg:px-20">
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                <motion.img
                    className="md:mt-[40px]"
                    src={`${BASE_URL}euge.webp`}
                    layoutId="main-image-1"
                    width={size > 1225 ? 550 : 300}
                    transition={{
                        ease: [0.6, 0.01, -0.05, 0.9],
                        duration: 0.8,
                    }}
                    whileHover={{
                        scale: 1.2
                    }}
                />
                <div
                    className="w-full flex flex-col items-start justify-center text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 2 }}
                        className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 text-left px-5 md:px-32 text-pretty"
                    >
                        ¡Holiss 👋,<br></br>Soy Euge!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 2 }}
                        className="text-3xl text-white font-light text-left px-5 md:px-32 text-pretty md:text-balance"
                    >
                        <span className="text-orange-200 font-medium">Artista </span>detrás de la lente 📸. Con <span className="text-orange-200 font-medium">pasión y visión única</span>, transformo momentos en obras de <span className="text-orange-200 font-medium">arte</span>✨. Desde <span className="text-orange-200 font-medium">bodas íntimas hasta vibrantes conciertos</span>, capturo la belleza en cada detalle.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default About
