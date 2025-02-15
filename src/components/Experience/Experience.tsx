import ExperienceItem from "./ExperienceItem"

function Experience() {
    return (
        <section className="py-16" id="experiencia">
            <h2 className="text-5xl md:text-6xl font-semibold text-left mb-14 z-30">Experiencia y Educación</h2>
            <div className="flex flex-col items-start w-full space-y-8">
                <ExperienceItem
                    title="Carrera Universitaria en Radio y Televisión"
                    subtitle="Universidad Nacional de San Luis"
                    description="Completé cuatro años de estudio en medios audiovisuales y comunicación, obteniendo una sólida base en radio y televisión."
                />
                <ExperienceItem
                    title="Fotógrafa Freelancer"
                    subtitle="Trabajos independientes"
                    description="Colaboré en diversos proyectos de retratos, moda y eventos, capturando momentos únicos y creando imágenes memorables."
                />
                <ExperienceItem
                    title="Cursos Online de Fotografía"
                    subtitle="Aprendizaje continuo"
                    description="Me he dedicado a mejorar constantemente mis habilidades a través de cursos en línea, explorando nuevas técnicas y enfoques en la fotografía."
                />
            </div>

        </section>
    )
}

export default Experience