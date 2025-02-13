import { motion } from "framer-motion";
import { BASE_URL } from "../../utils/consts";

interface CardLinkProps {
  title: string;
  description: string;
  endpoint: string;
  images: string[];
  previewImages: string[];
}

const CardLink: React.FC<CardLinkProps> = ({ title, description, endpoint, previewImages }) => {
    return (
        <a href={`/album/${endpoint}`}>
            <div className="relative">
                <div className="w-full md:h-[400px] z-20 p-10 bg-zinc-900/70 sm:bg-zinc-900/50 hover:bg-zinc-950/80 duration-75 group">
                    <h3 className="text-4xl md:text-7xl font-bold mb-2 z-30 text-pretty">{title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 z-30">{description}</p>

                    <div
                      style={{ top: '0px', left: '0px', position: 'absolute', height: '100%', zIndex: '-5'}}
                    >
                      <div className="flex items-center justify-end h-full w-full z-0">
                        {previewImages?.map((name, index) => (
                            <motion.img
                              key={index}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: `${index}.99` }}
                              src={BASE_URL + "album/" + endpoint + `/previewImage/${name}.jpg`}
                              style={{ height: '100%' }}
                              alt={name}
                              className="w-[25%] object-cover h-[full] relative rounded -z-20"
                            />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center mb-5 text-orange-300  absolute bottom-0 ">
                        <span className="hover:text-orange-400 z-10">Ver más</span>
                        <motion.svg
                            className="w-5 h-5 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            whileHover={{ scale: 1.2 }}
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

export default CardLink;