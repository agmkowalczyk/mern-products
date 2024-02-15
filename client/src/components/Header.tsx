import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Link to={"/"}>
        <Title>Awesome Products</Title>
      </Link>
      <AddLink to="/products/add">Dodaj produkt</AddLink>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  color: #538a89;
  gap: 2rem;
`
const Logo = styled.div`
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23538A89"><g ><rect width="18" height="2" x="3" y="3" rx="1" ry="1"/><rect width="14" height="2" x="3" y="7" rx="1" ry="1"/><rect width="14" height="2" x="3" y="15" rx="1" ry="1"/><rect width="18" height="2" x="3" y="19" rx="1" ry="1"/><rect width="10" height="2" x="3" y="11" rx="1" ry="1"/></g></svg>');

  width: 48px;
  height: 48px;
  background-size: cover;
  display: inline-block;
`
const Title = styled.h1`
  cursor: pointer;
  font-size: 1.2rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`
const AddLink = styled(Link)`
  padding: 0.5em 0.75em;
  font-size: 0.7em;
  border-radius: 10px;
  color: #fff;
  background: #538a89;
  margin-right: 0;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background: #73a9ad;
  }

  @media (min-width: 600px) {
    padding: 0.75em 1em;
    font-size: 1em;
  }
`
