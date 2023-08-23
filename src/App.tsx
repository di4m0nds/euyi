import { useState } from "react"

import { AnimatePresence } from "framer-motion"

import { Loader } from "./components"
import { Route, Routes, useLocation } from "react-router-dom"
import NotFound from "./pages/NotFound/NotFound"
import Album from "./pages/Album/Album"
import Home from "./pages/Home/Home"

function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const location = useLocation()

    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    loading
                        ? <Loader setLoading={setLoading} />
                        : <Home />
                } />
                <Route path="/non-animation" element={<Home />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </AnimatePresence>

    )
}

export default App
