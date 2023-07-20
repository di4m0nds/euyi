import { useState } from "react"

import { AnimatePresence } from "framer-motion"

import { Header, Loader } from "./components"

function App() {
    const [ loading, setLoading ] = useState<boolean>(true)

    return (
       <AnimatePresence>
           {loading
           ? <Loader setLoading={setLoading} />
           : (
               <div className="w-screen">
                   <Header />
                   {/* ABOUT */}
                   {/* PROJECTS/WORKS */}
                   {/* CONTACTING */}
               </div>
           )}
       </AnimatePresence>
    )
}

export default App
