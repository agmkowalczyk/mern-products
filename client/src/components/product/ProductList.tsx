import { useEffect, useState } from "react"
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../services/product"
import { Product } from "../../types"
import ProductDetails from "./ProductDetails"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const ProductList = () => {
  const { data: products, isSuccess: isSuccessGetProducts } =
    useGetAllProductsQuery()
  const [deleteProduct, { isError, isSuccess }] = useDeleteProductMutation()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    if (confirm("Czy jesteś pewien?")) {
      deleteProduct(id)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Produkt usunięty")
    }
    if (isError) {
      toast.error("Wystąpił błąd")
    }
  }, [isSuccess, isError])

  return (
    <div>
      <h2>Lista Produktów</h2>
      {isSuccessGetProducts && products.length === 0 ? (
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
