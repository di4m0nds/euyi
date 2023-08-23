import CardLink from "../CardLink/CardLink"
import { motion } from "framer-motion"
import { projects } from "../../data/projects"

function Projects() {
    return (
        <motion.section
            className="py-16" id="trabajos"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="mt-10 text-4xl font-semibold text-center mb-14">Portafolio de Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((work) => <CardLink endpoint={work.endpoint} title={work.title} description={work.description} />)}
            </div>
        </motion.section>
    )
}

export default Projects