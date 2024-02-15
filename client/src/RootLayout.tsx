import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { ToastContainer, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        transition={Zoom}
      />
    </div>
  )
}

export default RootLayout
