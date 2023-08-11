import { motion } from "framer-motion"
import { BASE_URL } from "../../utils/consts"

function About() {
    const size = window.screen.width

    return (
        <section className="w-full relative">
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                <motion.img
                    className="md:mt-[40px]"
                    src={`${BASE_URL}euge2.webp`}
                    layoutId="main-image-1"
                    width={size > 1225 ? 400 : 300}
                    transition={{
                        ease: [0.6, 0.01, -0.05, 0.9],
                        duration: 0.8,
                    }}
                />
                <motion.div
                    className="flex flex-col items-center justify-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">¡Hola! Soy Eugenia</h1>
                    <p className="text-lg md:text-xl text-center">
                        ¡Bienvenidos a mi mundo de momentos capturados con amor y creatividad!
                    </p>
                    <p className="text-lg text-orange-200 text-center mt-5 px-16">
                        Soy una apasionada fotógrafa con una visión artística única y un ojo atento para capturar la belleza en cada detalle. Desde bodas íntimas hasta emocionantes conciertos, estoy aquí para convertir cada momento en una obra de arte.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About
