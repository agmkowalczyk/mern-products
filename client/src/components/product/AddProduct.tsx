import { useEffect } from "react"
import { useAddProductMutation } from "../../services/product"
import ProductForm, { IProductForm } from "../forms/ProductForm"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const initialValues: IProductForm = {
  name: "",
  price: 0,
  stock: 0,
  prodDate: new Date(),
  category: "",
  description: "",
}

const AddProduct = () => {
  const navigate = useNavigate()
  const [addProduct, { isError, isSuccess }] = useAddProductMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success("Produkt dodany")
      navigate("/")
    }
    if (isError) {
      toast.error("Wystąpił błąd")
    }
  }, [isSuccess, isError])

  return (
    <div>
      <h2>Dodaj Produkt</h2>
      <ProductForm useMutation={addProduct} initialValues={initialValues} />
    </div>
  )
}

export default AddProduct
