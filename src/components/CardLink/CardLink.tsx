import { motion } from "framer-motion"
function CardLink({ title, description, endpoint }: { title: string, description: string, endpoint: string }) {
    return (
        <a href={`/album/${endpoint}`}>
            <div className="max-w rounded-3xl p-px bg-gradient-to-b from-green-300 to-orange-300 dark:from-red-800 dark:to-yellow-800 hover:shadow-2xl hover:shadow-orange-200/20 duration-700">
                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-zinc-900 hover:bg-zinc-950 duration-75">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-300">{description}</p>

                    <div className="flex items-center mt-5">
                        <span className="text-gray-400">Ver más</span>
                        <motion.svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            whileHover={{ y: 5, scale: 1.2 }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 4.293a1 1 0 011.414 0L12 8.586V3a1 1 0 112 0v6.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </motion.svg>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CardLink