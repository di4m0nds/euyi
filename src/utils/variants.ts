import { Variants } from "framer-motion"

export const containerLoaderVariant = {
    show: {
        transition: {
            staggerChildren: 0.5,
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
            duration: 1.8,
        }
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            ease: 'backOut',
            duration: 0.5,
        }
    }
} as Variants

export const mainImageLoaderVariant = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'backIn',
      duration: 0.5,
    },
  },
} as Variants