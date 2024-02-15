import { ErrorMessage, Field, Form, Formik } from "formik"
import categories from "../../constants/categories"
import { useAddProductMutation } from "../../services/product"
import { productSchema } from "../../validations/product"
import styled from "styled-components"

interface IProductForm {
  name: string
  price: number
  stock: number
  prodDate: Date
  category: "smartphones" | "laptops" | "displays"
  description?: string
}

const initialValues: IProductForm = {
  name: "",
  price: 0,
  stock: 0,
  prodDate: new Date(),
  category: "smartphones",
  description: "",
}

const ProductForm = () => {
  const [addProduct] = useAddProductMutation()

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={productSchema}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          addProduct(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <label htmlFor="name">Nazwa</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="price">Cena</label>
            <Field type="number" name="price" />
            <ErrorMessage name="price" component="div" />
            <label htmlFor="stock">Ilość w magazynie</label>
            <Field type="number" name="stock" />
            <ErrorMessage name="stock" component="div" />
            <label htmlFor="prodDate">Data produkcji</label>
            <Field name="prodDate" />
            <ErrorMessage name="prodDate" component="div" />
            <label htmlFor="category">Kategoria</label>
            <Field as="select" name="category">
              <option value=""> </option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" />
            <label htmlFor="description">Opis</label>
            <Field as="textarea" name="description" rows={8} />
            <ErrorMessage name="description" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Zapisz
            </button>
          </StyledForm>
        )}
      </Formik>
    </div>
  )
}

export default ProductForm

const StyledForm = styled(Form)`
  margin: auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`
