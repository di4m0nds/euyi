import { Variants } from "framer-motion"

export const containerLoaderVariant = {
    show: {
        transition: {
            staggerChildren: 0.6,
        }
    }
} as Variants

export const imageLoaderVariant = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'backIn',
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            ease: 'easeInOut',
            duration: 0.8,
        }
    }
} as Variants