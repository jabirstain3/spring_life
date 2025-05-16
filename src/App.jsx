import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { Bounce, ToastContainer } from "react-toastify"
import { Outlet } from "react-router"

function App() {

  return (
    <section className='w-full'>
      <Navbar/>
      <div className="bg-[#def9cb8e]">
        <Outlet/>
      </div>
      <Footer/>
      <div className="border-t border-[#c4bfbf] py-4">
        <p className="text-center text-sm">© 2023 Spring Life. All rights reserved. Developed by jabirstain3</p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} limit={4} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Bounce} />
    </section>
  )
}

export default App
