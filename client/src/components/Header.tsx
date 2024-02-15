import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Awesome Products</h1>
      </Link>
      <Link to="/products/add">Dodaj produkt</Link>
    </header>
  )
}

export default Header
