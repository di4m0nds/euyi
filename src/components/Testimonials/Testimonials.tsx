function Testimonials() {
    return (
        <section className="py-16" id="testimonios">
            <h2 className="text-3xl font-semibold text-center mb-8">Testimonios de Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border rounded-lg p-4">
                    <p>"Eugenia capturó la esencia misma de nuestra boda. Sus fotos transmiten emociones que reviven el día una y otra vez."</p>
                    <p className="mt-2 text-gray-300">- Alejandro González</p>
                </div>

                <div className="border rounded-lg p-4">
                    <p>"Estamos asombrados por la creatividad de Eugenia en cada toma. Sus fotos cuentan una historia única en cada evento."</p>
                    <p className="mt-2 text-gray-300">- Sofia Martínez</p>
                </div>

                <div className="border rounded-lg p-4">
                    <p>"Eugenia logra capturar momentos mágicos en cada sesión. Sus fotos son tesoros que atesoraremos para siempre."</p>
                    <p className="mt-2 text-gray-300">- Manuel Pérez</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials