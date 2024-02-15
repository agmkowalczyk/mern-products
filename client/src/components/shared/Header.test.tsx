import { render, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./Header"

describe("Header component", () => {
  test("renders logo and title with correct text", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    )

    expect(getByText("Awesome Products")).toBeInTheDocument()
  })

  test("renders add button with correct text and href", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    )

    const addButton = getByText("Dodaj produkt") as HTMLAnchorElement
    expect(addButton).toBeInTheDocument()
    expect(addButton.href).toContain("/products/add")
  })

  test("navigates to home page when logo or title is clicked", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    )

    fireEvent.click(getByText("Awesome Products"))
    expect(window.location.pathname).toBe("/")
  })
})
