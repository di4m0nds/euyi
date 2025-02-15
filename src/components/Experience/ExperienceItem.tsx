interface ExperienceItemProps {
    title: string
    subtitle: string
    description: string
}
function ExperienceItem({
    title,
    subtitle,
    description,
}: ExperienceItemProps) {
    return (
        <div className="p-10 bg-white/10 hover:bg-white/80 rounded-lg text-left text-white hover:text-black w-full text-pretty">
            <h3 className="text-4xl font-bold mb-2">{title}</h3>
            <p className="text-xl">{subtitle}</p>
            <p className="text-xl mt-8 text-pretty opacity-80">
                {description}
            </p>
        </div>
    )
}
export default ExperienceItem