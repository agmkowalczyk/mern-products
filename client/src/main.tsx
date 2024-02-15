import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import "./index.css"
import RootLayout from "./RootLayout"
import ProductList from "./components/product/ProductList"
import AddProduct from "./components/product/AddProduct"
import EditProduct from "./components/product/EditProduct"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/products" />,
        },
        {
          path: "/products",
          index: true,
          element: <ProductList />,
        },
        {
          path: "/products/add",
          element: <AddProduct />,
        },
        {
          path: "/products/:id/edit",
          element: <EditProduct />,
        },
      ],
    },
  ])

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
