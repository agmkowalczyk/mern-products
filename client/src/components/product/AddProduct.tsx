import { useAddProductMutation } from "../../services/product"
import ProductForm, { IProductForm } from "../forms/ProductForm"

const initialValues: IProductForm = {
  name: "",
  price: 0,
  stock: 0,
  prodDate: new Date(),
  category: "",
  description: "",
}

const AddProduct = () => {
  const [addProduct] = useAddProductMutation()

  return (
    <div>
      <h2>Dodaj Produkt</h2>
      <ProductForm useMutation={addProduct} initialValues={initialValues} />
    </div>
  )
}

export default AddProduct
