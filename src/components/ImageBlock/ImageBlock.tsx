import { motion } from "framer-motion"

import { PropsImageComponent } from "../../utils/interfaces"
import { BASE_URL } from "../../utils/consts"

function ImageBlock({ className, name, width, variants, type }: PropsImageComponent) {
    return (
        <motion.div
            variants={variants}
            className={`${className}`}
        >
            <picture>
                <source srcSet={BASE_URL + name + ".webp"} type={type} />
                <img src={BASE_URL + name + ".webp"} alt={name} width={width} />
            </picture>
        </motion.div>
    )
}

export default ImageBlock
