import { useEffect } from "react"

function NotFound() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="w-full h-screen text-center pb-[80px]">
      <h1 className="mx-[40px] lg:mx-[200px] pt-[100px] font-bold text-[60px]">404</h1>
      <div className="mx-[60px] lg:mx-[220px] mt-[50px]">
        <div className="w-full h-2 bg-gray-300 rounded-[50px]" />
      </div>
      <h1 className="mx-[40px] lg:mx-[200px] pt-[100px] font-semibold text-[30px]">¡Oh no, algo anda mal!</h1>
      <p className="mx-[40px] lg:mx-[200px] mt-[50px] font-regular text-[20px]">Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  )
}

export default NotFound
