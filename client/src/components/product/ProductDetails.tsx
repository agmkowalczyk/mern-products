import styled from "styled-components"
import { Product } from "../../types"
import { formatPrice, parseDate } from "../../utils"

const ProductDetails = ({
  product,
}: {
  product: Product | null
}) => {
  return (
    <div>
      <h2>Szczegóły produktu</h2>
      <Row>
        <b>Nazwa:</b> {product?.name}
      </Row>
      <Row>
        <b>Cena:</b> {formatPrice(product?.price)}
      </Row>
      <Row>
        <b>Ilość w magazynie:</b> {product?.stock}
      </Row>
      <Row>
        <b>Data produkcji:</b> {parseDate(product?.prodDate)}
      </Row>
      <Row>
        <b>Kategoria:</b> {product?.category}
      </Row>
      <Row>
        <b>Opis:</b> {product?.description}
      </Row>
    </div>
  )
}

export default ProductDetails

const Row = styled.div`
  background: #c4dfdf;
  border-bottom: 1px solid #e3f4f4;
  padding: 10px;
  font-size: 12px;
  text-align: left;
  margin-bottom: 2px;
`