import { Variants } from "framer-motion";

export interface PropsLoaderComponent {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface PropsRecordStandar {
    item: Record<string, unknown>;
}

export type imageName = 'show_1' | 'show_2' | 'show_3' | 'show_4' | 'shoot_1' | 'shoot_2' | 'shoot_3' | 'shoot_4' | 'food_1' | 'food_2' | 'food_3' | 'food_4' | 'marriage' | 'euge'
export type imageType = 'image/webp' | 'image/jpg' | 'image/png'
export interface PropsImageComponent {
    className: string | null
    name: imageName
    width: number
    variants: Variants
    type: imageType
}