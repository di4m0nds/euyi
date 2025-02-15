import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "Eugenia capturó la esencia misma de nuestra boda. Sus fotos transmiten emociones que reviven el día una y otra vez.",
        author: "Alejandro González",
        emoji: "💍"
    },
    {
        text: "Estamos asombrados por la creatividad de Eugenia en cada toma. Sus fotos cuentan una historia única en cada evento.",
        author: "Sofia Martínez",
        emoji: "📸"
    },
    {
        text: "Eugenia logra capturar momentos mágicos en cada sesión. Sus fotos son tesoros que atesoraremos para siempre.",
        author: "Manuel Pérez",
        emoji: "✨"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32" id="testimonios">
            <h2 className="text-5xl md:text-6xl font-semibold text-left mb-14 z-30">✨ Testimonios de Clientes ✨</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="border border-white rounded-2xl p-6 transition-shadow shadow-2xl shadow-transparent hover:shadow-yellow-100/40 duration-500 bg-black/10 text-white"
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="mt-4 text-xl">{testimonial.text}</p>
                        <span className="text-3xl">{testimonial.emoji}</span>
                        <p className="mt-4 text-gray-500 font-semibold">- {testimonial.author}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}