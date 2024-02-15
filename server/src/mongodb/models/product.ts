import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: { type: String, max: 100, required: true },
  price: {
    type: Number,
    required: true,
    validate: (value: number) => value >= 0,
  },
  stock: {
    type: Number,
    required: true,
    validate: (value: number) => value >= 0,
  },
  prodDate: { type: Date, required: true },
  category: {
    type: String,
    enum: ['smartphones', 'laptops', 'displays'],
    required: true,
  },
  description: { type: String, max: 2000 },
})

const productModel = mongoose.model('Product', ProductSchema)

export default productModel
