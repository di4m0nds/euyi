import { Header, About, Projects, Experience, Testimonials, Footer } from "../../components"

function Home() {
  return(
    <div className="w-screen">
        <div className="sticky top-0 z-50 pb-20 lg:pb-6 bg-gradient-to-t from-transparent via-black/90 to-black">
          <Header activeNavbar={true} />
        </div>
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