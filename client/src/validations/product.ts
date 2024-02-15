import { object, string, number, date } from "yup"
import categories from "../constants/categories"

export const productSchema = object({
  name: string()
    .max(100, "Osiągnięto maksymalną ilość znaków")
    .required("Wpisz nazwę"),
  price: number()
    .min(0)
    .required("Podaj cenę")
    .test("positive", "Minimalna wartość to 0", value => value >= 0),
  stock: number()
    .required("Podaj ilość w magazynie")
    .test("positive", "Minimalna wartość to 0", value => value >= 0),
  prodDate: date().required("Wybierz datę produkcji"),
  category: string().oneOf(categories).required("Wybierz kategorię"),
  description: string().max(2000, "Osiągnięto maksymalną ilość znaków"),
})
