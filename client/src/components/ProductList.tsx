import { useGetAllProductsQuery } from "../services/product"
import { Product } from "../types"
import ProductDetails from "./ProductDetails"

const ProductList = () => {
  const { data: products, isSuccess } = useGetAllProductsQuery()

  const handleDelete = () => {}

  return (
    <div>
      <h2>Lista Produktów</h2>
      {isSuccess && products.length === 0 ? (
        <p>No products</p>
      ) : (
        <ul>
          {products?.map(product => (
            <li key={product._id}>
              <span>
                {product.name}
              </span>
              <button onClick={() => {}}>Edytuj</button>
              <button onClick={() => handleDelete()}>Usuń</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductList
