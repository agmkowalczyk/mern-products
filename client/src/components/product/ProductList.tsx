import { useState } from "react"
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../services/product"
import { Product } from "../../types"
import ProductDetails from "./ProductDetails"
import { useNavigate } from "react-router-dom"

const ProductList = () => {
  const { data: products, isSuccess } = useGetAllProductsQuery()
    const [deleteProduct] = useDeleteProductMutation()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    if (confirm("Czy jesteś pewien?")) {
      deleteProduct(id)
    }
  }

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
              <button onClick={() => navigate(`/products/${product._id}/edit`)}>
                Edytuj
              </button>
              <button onClick={() => handleDelete(product._id)}>Usuń</button>
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  )
}

export default ProductList
