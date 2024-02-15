import { Request, Response } from 'express'
import Product from '../mongodb/models/product'
import mongoose from 'mongoose'

const getAllProducts = async (_: Request, res: Response) => {
  try {
    const products = await Product.find()

    res.status(200).json(products)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, stock, prodDate, category, description } = req.body

    const newProduct = await Product.create({
      name,
      price,
      stock,
      prodDate,
      category,
      description,
    })

    res.status(200).json(newProduct)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await Product.findById(id)

    res.status(200).json(product)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

const editProduct = async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`Id ${_id} is not valid`)

    const { name, price, stock, prodDate, category, description } = req.body

    const updatedProduct = await Product.findByIdAndUpdate(_id, {
      name,
      price,
      stock,
      prodDate,
      category,
      description,
    })

    res.status(200).json(updatedProduct)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

export { getAllProducts, createProduct, getProduct, editProduct }
