import { Product } from "../types"
import { formatPrice, parseDate } from "../utils"

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div>
      <h2>Szczegóły produktu</h2>
      <div>
        <b>Nazwa:</b>
        {product.name}
      </div>
      <div>
        <b>Cena:</b>
        {formatPrice(product.price)}
      </div>
      <div>
        <b>Ilość w magazynie:</b>
        {product.stock}
      </div>
      <div>
        <b>Data produkcji:</b>
        {parseDate(product.prodDate)}
      </div>
      <div>
        <b>Kategoria:</b>
        {product.category}
      </div>
      <div>
        <b>Opis:</b>
        {product.description}
      </div>
    </div>
  )
}

export default ProductDetails
