import { motion } from "framer-motion";

import { PropsLoaderComponent } from "../../utils/interfaces";
import { containerLoaderVariant, imageLoaderVariant, mainImageLoaderVariant } from "../../utils/variants";

import ImageBlock from "../ImageBlock/ImageBlock";
import { BASE_URL } from "../../utils/consts";

function Loader({ setLoading }: PropsLoaderComponent) {
    return (
        <motion.div className="w-screen h-screen relative"
            variants={containerLoaderVariant}
            onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="w-full h-full flex justify-center items-center">
                <ImageBlock variants={imageLoaderVariant} name="euge" width={400} className="" type="image/webp" />
            </div>
            <div className="w-full h-full flex justify-center items-center absolute top-[0px]">
                <motion.img
                    variants={mainImageLoaderVariant}
                    src={BASE_URL + "euge.webp"}
                    alt="main-euge"
                    width={400}
                    layoutId="main-image-1"
                />
            </div>
            <ImageBlock
                variants={imageLoaderVariant} name="show_1" width={400}
                className="absolute top-[5rem] left-[5rem]" type="image/webp" />
            <ImageBlock
                variants={imageLoaderVariant} name="food_1" width={500}
                className="absolute top-[5rem] right-[5rem]" type="image/webp" />
            <ImageBlock
                variants={imageLoaderVariant} name="shoot_1" width={300}
                className="absolute bottom-[5rem] left-[5rem]" type="image/webp" />
            <ImageBlock
                variants={imageLoaderVariant} name="marriage" width={500}
                className="absolute bottom-[5rem] right-[5rem]" type="image/webp" />
        </motion.div>
    )
}

export default Loader
