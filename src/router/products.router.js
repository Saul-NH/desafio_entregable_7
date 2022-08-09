const { Router } = require('express');
const productsController = require('../controller/product.controller');

const routerProducts = Router()

routerProducts.get('/', productsController.getAllProducts)
routerProducts.get('/:id/', productsController.getProductById)
routerProducts.post('/', productsController.createProduct)
routerProducts.put('/:id', productsController.updateProductById)
routerProducts.delete('/:id', productsController.deleteProductById)

module.exports = routerProducts
