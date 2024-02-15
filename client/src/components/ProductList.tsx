import { useState } from "react"
import { useGetAllProductsQuery } from "../services/product"
import { Product } from "../types"
import ProductDetails from "./ProductDetails"

const ProductList = () => {
  const { data: products, isSuccess } = useGetAllProductsQuery()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
              <span onClick={() => setSelectedProduct(product)}>
                {product.name}
              </span>
              <button onClick={() => {}}>Edytuj</button>
              <button onClick={() => handleDelete()}>Usuń</button>
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  )
}

export default ProductList
