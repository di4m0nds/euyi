import CardLink from "../CardLink/CardLink"
import { motion } from "framer-motion"

function Projects() {
    return (
        <motion.section
            className="py-16" id="trabajos"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="mt-10 text-4xl font-semibold text-center mb-14">Portafolio de Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <CardLink endpoint="bodas" title="Fotografía de Bodas" description="Capturando la esencia emocional y los momentos inolvidables de tu día especial con un enfoque artístico y atemporal." />
                <CardLink endpoint="bautismo" title="Bautismos y Ceremonias" description="Capturando la solemnidad y alegría de los momentos sagrados mientras celebramos el bautismo de tus pequeños seres queridos." />
                <CardLink endpoint="conciertos" title="Fotografía de Conciertos" description="Capturando la intensidad y la energía de las actuaciones en vivo, con imágenes que resaltan el alma de la música y los artistas." />
                <CardLink endpoint="productos" title="Fotografía de Productos" description="Presentando tus productos de manera elegante y cautivadora a través de fotografía de productos que resalta sus detalles y calidad." />
                <CardLink endpoint="retratos" title="Retratos Únicos" description="Capturando la esencia de cada individuo en una sesión de retratos personalizada, donde cada imagen cuenta una historia única." />
            </div>
        </motion.section>
    )
}

export default Projects