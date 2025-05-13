import { Outlet } from "react-router"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/loader/Footer"

function App() {

  return (
    <section className='w-full '>
      <Navbar/>
      <div className="bg-[#def9cb8e]">
        <Outlet/>
      </div>
      <h1>Spring life</h1>
      <Footer/>
      <div className="border-t border-[#c4bfbf] py-4">
        <p className="text-center text-sm">© 2023 Spring Life. All rights reserved. Developed by jabirstain3</p>
      </div>
    </section>
  )
}

export default App
