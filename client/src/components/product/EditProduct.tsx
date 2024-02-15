import { useNavigate, useParams } from "react-router-dom"
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../services/product"
import ProductForm from "../forms/ProductForm"
import { useEffect } from "react"
import { toast } from "react-toastify"

const EditProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: product } = useGetProductQuery(id || "")
  const [updateProduct, { isError, isSuccess }] = useUpdateProductMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success("Produkt zaktualizowany")
      navigate("/")
    }
    if (isError) {
      toast.error("Wystąpił błąd")
    }
  }, [isSuccess, isError])

  return (
    <>
      <h2>Edytuj Produkt</h2>
      <ProductForm useMutation={updateProduct} initialValues={product!} />
    </>
  )
}

export default EditProduct
