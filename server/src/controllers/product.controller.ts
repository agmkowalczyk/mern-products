import { Request, Response } from 'express'
import Product from '../mongodb/models/product'

const getAllProducts = async (_: Request, res: Response) => {
  try {
    const products = await Product.find()

    res.status(200).json(products)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

export { getAllProducts }
