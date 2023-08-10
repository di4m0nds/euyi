import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="w-full h-[100px] relative flex flex-col md:flex-row md:justify-evenly justify-center items-center mt-[20px] md:px-0 px-5">
            <a href="/">
                <h1 className="text-[2.3rem] font-bold">EUGE FOTO{window.screen.width > 375 ? 'GRAFIA' : ''}</h1>
            </a>
            <Navbar />
        </header>
    )
}

export default Header
