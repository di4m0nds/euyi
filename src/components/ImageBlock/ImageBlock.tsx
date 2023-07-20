import { motion } from "framer-motion"

import { loadImages } from "../../utils/images"
import { PropsImageComponent } from "../../utils/interfaces"

function ImageBlock({ className, name, width, variants }: PropsImageComponent) {
    const image = loadImages[name]

    return variants != null
    ? (
        <motion.div
            variants={variants}
            className={className ? className : ""}
        >
            <img src={image} alt={name} width={width} />
        </motion.div>
    ) : (
        <img src={image} alt={name} width={width} className={className ? className : ""} />
    )
}

export default ImageBlock
