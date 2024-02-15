import { ErrorMessage as ErrorMessageFormik, Field, Form, Formik } from "formik"
import categories from "../../constants/categories"
import { productSchema } from "../../validations/product"
import styled from "styled-components"
import type { TypedMutationTrigger } from "@reduxjs/toolkit/query/react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export interface IProductForm {
  name: string
  price: number
  stock: number
  prodDate: Date
  category: "smartphones" | "laptops" | "displays" | ""
  description?: string
}

interface Props {
  useMutation: TypedMutationTrigger<any, any, any>
  initialValues: IProductForm
}

const ProductForm = ({ useMutation, initialValues }: Props) => {
  return (
    <div>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validationSchema={productSchema}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            useMutation(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <label htmlFor="name">Nazwa</label>
              <Field name="name" as={Input} />
              <ErrorMessage name="name" component="div" />
              <label htmlFor="price">Cena</label>
              <Field type="number" name="price" as={Input} />
              <ErrorMessage name="price" component="div" />
              <label htmlFor="stock">Ilość w magazynie</label>
              <Field type="number" name="stock" as={Input} />
              <ErrorMessage name="stock" component="div" />
              <label htmlFor="prodDate">Data produkcji</label>
              <Field
                name="prodDate"
                component={(props: any) => (
                  <DatePickerWrapper>
                    <DatePicker
                      selected={props.field.value || null}
                      name={props.field.name}
                      dateFormat="yyyy-MM-dd"
                      maxDate={new Date()}
                      onChange={(date: Date) =>
                        props.form.setFieldValue(props.field.name, date)
                      }
                    />
                  </DatePickerWrapper>
                )}
              />
              <ErrorMessage name="prodDate" component="div" />
              <label htmlFor="category">Kategoria</label>
              <Field as={Select} name="category">
                <option value=""> </option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="category" component="div" />
              <label htmlFor="description">Opis</label>
              <Field as={Textarea} name="description" rows={8} />
              <ErrorMessage name="description" component="div" />
              <Button type="submit" disabled={isSubmitting}>
                Zapisz
              </Button>
            </StyledForm>
          )}
        </Formik>
      )}
    </div>
  )
}

export default ProductForm

const StyledForm = styled(Form)`
  background: #e3f4f4;
  margin: auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`
const Input = styled.input`
  height: 1.7em;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  font-family: Arial;
  border: 1px solid #c4dfdf;
  border-radius: 10px;
`
const Select = styled.select`
  height: 2.8em;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  font-family: Arial;
  border: 1px solid #c4dfdf;
  border-radius: 10px;
`
const Textarea = styled.textarea`
  padding: 0.5em 1em;
  margin: 0.5em 0;
  font-family: Arial;
  border: 1px solid #c4dfdf;
  border-radius: 10px;
`
const DatePickerWrapper = styled.div`
  input[type="text"] {
    height: 1.7em;
    padding: 0.5em 1em;
    margin: 0.5em 0;
    font-family: Arial;
    border: 1px solid #c4dfdf;
    border-radius: 10px;
  }
`
const Button = styled.button`
  background: #538a89;
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin: 1em auto;
  width: 100%;
  padding: 0.75em 1em;

  &:hover {
    background: #73a9ad;
  }
`
const ErrorMessage = styled(ErrorMessageFormik)`
  color: red;
  text-align: right;
  font-size: 0.8em;
`
