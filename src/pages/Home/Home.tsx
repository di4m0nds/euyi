import { Header, About, Projects, Experience, Testimonials } from "../../components"

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
    </div>
  )
}

export default Home