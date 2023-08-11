import { useState } from "react"

import { AnimatePresence } from "framer-motion"

import { Header, Loader, About, Projects, Experience, Testimonials } from "./components"
import { Route, Routes, useLocation } from "react-router-dom"

function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const location = useLocation()

    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    loading
                        ? <Loader setLoading={setLoading} />
                        : (
                            <div className="w-screen">
                                <Header />
                                <main className="px-10 md:px-[15%]">
                                    <About />
                                    <Projects />
                                    <Experience />
                                    <Testimonials />
                                </main>
                            </div>
                        )}
                />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>

        </AnimatePresence>

    )
}

export default App
