import express from 'express'

import {
  getAllProducts,
  createProduct,
  getProduct,
  editProduct,
} from '../controllers/product.controller'

const router = express.Router()

router.route('/').get(getAllProducts)
router.route('/add').post(createProduct)
router.route('/:id').get(getProduct)
router.route('/:id').patch(editProduct)

export default router
