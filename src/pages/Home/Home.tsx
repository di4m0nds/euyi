import { Header, About, Projects, Experience, Testimonials, Footer } from "../../components"

function Home() {
  return(
    <div className="w-screen">
        <Header activeNavbar={true} />
        <main className="w-[90%] xl:w-[70%] m-auto">
            <About />
            <Projects />
            <Experience />
            <Testimonials />
        </main>
        <Footer />
    </div>
  )
}

export default Home