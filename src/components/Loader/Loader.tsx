import { useEffect } from "react"

import { Variants, motion } from "framer-motion";

import { PropsLoaderComponent } from "../../utils/interfaces";
import ImageBlock from "../ImageBlock/ImageBlock";

// Variants
const container = {
    show: {
        trasition: {
            staggerChildren: 1.5,
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        trasition: {
            ease: "easeOut",
            duration: 1,
        }
    },
    exit: {
        opacity: 0,
        y: -50,
        trasition: {
            ease: 'easeIn',
            duration: 1,
        }
    }
}

function Loader({ setLoading }: PropsLoaderComponent) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <motion.div className="w-screen h-screen relative"
            variants={container as Variants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div  className="w-full h-full flex justify-center items-center">
                <ImageBlock variants={null} name="euge" width={500} className={null}/>
            </div>
            <ImageBlock variants={item} name="show_1" width={400} className="absolute top-[5rem] left-[5rem]"/>
            <ImageBlock variants={item} name="food_1" width={500} className="absolute top-[5rem] right-[5rem]"/>
            <ImageBlock variants={item} name="shoot_1" width={300} className="absolute bottom-[5rem] left-[5rem]"/>
            <ImageBlock variants={item} name="marriage" width={300} className="absolute bottom-[5rem] right-[5rem]"/>
        </motion.div>
    )
}

export default Loader
