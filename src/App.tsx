import { useState } from "react"

import { AnimatePresence } from "framer-motion"

import { Header, Loader, About } from "./components"

function App() {
    const [ loading, setLoading ] = useState<boolean>(true)

    return (
       <AnimatePresence>
           {loading
           ? <Loader setLoading={setLoading} />
           : (
               <div className="w-screen">
                   <Header />
                   <About />
                   {/* PROJECTS/WORKS */}
                   {/* CONTACTING */}
               </div>
           )}
       </AnimatePresence>
    )
}

export default App
