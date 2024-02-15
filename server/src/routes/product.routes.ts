import express from 'express'

import {
  getAllProducts,
  createProduct,
} from '../controllers/product.controller'

const router = express.Router()

router.route('/').get(getAllProducts)
router.route('/add').post(createProduct)

export default router
