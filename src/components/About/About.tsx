import { motion } from "framer-motion"
import { BASE_URL } from "../../utils/consts"

function About() {
    const size = window.screen.width

    return (
        <section className="w-full relative">
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
                />
                <div
                    className="flex flex-col items-center justify-center text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-center"
                    >
                        ¡Hola! Soy Eugenia
                    </motion.h1>
                    {/* <motion.p
                        initial={{ opacity: 0, y: -50, scale: 0.4 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        className="text-lg md:text-xl text-center"
                    >
                        ¡Bienvenidos a mi mundo de momentos capturados con amor y creatividad!
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1.2 }}
                        className="w-[70%] h-[3px] bg-zinc-300/70 rounded my-5"
                    /> */}
                    <motion.p
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        className="text-lg text-orange-200 text-center px-1 md:px-16"
                    >
                        Soy una apasionada fotógrafa con una visión artística única y un ojo atento para capturar la belleza en cada detalle. Desde bodas íntimas hasta emocionantes conciertos, estoy aquí para convertir cada momento en una obra de arte.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default About
