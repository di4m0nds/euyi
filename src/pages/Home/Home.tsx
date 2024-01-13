import { Header, About, Projects, Experience, Testimonials, Footer } from "../../components"

function Home() {
  return(
    <div className="w-screen">
        <Header activeNavbar={true} />
        <main className="px-10 md:px-[15%]">
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