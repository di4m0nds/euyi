import { motion } from "framer-motion"

import { PropsImageComponent } from "../../utils/interfaces"
import { BASE_URL } from "../../utils/consts"

function ImageBlock({ className, name, width, variants }: PropsImageComponent) {
    const type = "image/webp"

    return variants != null
    ? (
        <motion.div
            variants={variants}
            className={className ? className : ""}
        >
            <picture>
                <source srcSet={BASE_URL + name + ".webp"} type={type} />
                <img src={BASE_URL + name + ".webp"} alt={name} width={width} />
            </picture>
        </motion.div>
    ) : (
        <picture>
            <source srcSet={BASE_URL + name + ".webp"} type={type} />
            <img src={BASE_URL + name + ".webp"} alt={name} width={width} />
        </picture>
    )
}

export default ImageBlock
