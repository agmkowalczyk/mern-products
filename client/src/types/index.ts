export interface Product {
  _id: string
  name: string
  price: number
  stock: number
  prodDate: Date
  category: "smartphones" | "laptops" | "displays"
  description?: string
}
