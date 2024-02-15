import { useParams } from "react-router-dom"
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../services/product"
import ProductForm from "../forms/ProductForm"

const EditProduct = () => {
  const { id } = useParams()
  const { data: product } = useGetProductQuery(id || "")
  const [updateProduct] = useUpdateProductMutation()

  return (
    <>
      <h2>Edytuj Produkt</h2>
      <ProductForm
        useMutation={updateProduct}
        initialValues={product!}
      />
    </>
  )
}

export default EditProduct
