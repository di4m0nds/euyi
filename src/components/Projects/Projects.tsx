import CardLink from "../CardLink/CardLink"
import { motion } from "framer-motion"
import { projects } from "../../data/projects"

function Projects() {

    return (
        <motion.section
            id="trabajos"
            className="pt-72 pb-72"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-5xl md:text-6xl font-semibold text-left mb-14 z-30">Portafolio de Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 z-30 relative">
                {projects.map((work, index) => <CardLink key={index} endpoint={work.endpoint} title={work.title} description={work.description} images={work.images} previewImages={work.previewImages} />)}
            </div>
        </motion.section>
    )
}

export default Projects