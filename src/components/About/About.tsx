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
                    width={size > 1225 ? 400 : 300}
                    transition={{
                        ease: [0.6, 0.01, -0.05, 0.9],
                        duration: 0.8,
                    }}
                    whileHover={{
                        scale: 1.2
                    }}
                />
                <div
                    className="flex flex-col items-center justify-center text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-center"
                        whileHover={{
                            scale: 1.2
                        }}
                    >
                        ¡Hola!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        className="text-lg text-orange-200 font-light text-center px-1 md:px-32 pt-8"
                    >
                        Artista detrás de la lente 📸✨. Con pasión y visión única, transformo momentos en obras de arte. Desde bodas íntimas hasta vibrantes conciertos, capturo la belleza en cada detalle.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default About
