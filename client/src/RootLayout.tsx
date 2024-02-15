import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { ToastContainer, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"

const RootLayout = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        transition={Zoom}
      />
    </Layout>
  )
}

export default RootLayout

const Layout = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0.5rem;

  @media (min-width: 600px) {
    padding: 1rem;
  }
`
