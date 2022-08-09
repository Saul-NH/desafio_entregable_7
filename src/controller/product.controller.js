const Product =  require('../clases/Product');
const options = require('../database/options/db_sqlite')
const product = new Product(options,'products');

const getAllProducts = async(req, res) => {
    try {
        res.json({
            products: await product.getAll()
        });
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

const getProductById = async(req, res) => {
    try {
        const productFound = await product.getById(+req.params.id);

        if(!productFound){
            return res.json({
                error: 'Product not found'
            })
        }

        return res.json({
            product: productFound
        })
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

const createProduct = async(req, res) => {
    try {
        const productIdCreated = await product.save(req.body);
        res.json({
            'product_id':productIdCreated
        })
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

const updateProductById = async(req, res) => {
    try {
        const message = await product.updateById(+req.params.id, req.body);
        if(!message){
            return res.json({
                error: `Product with ID: ${+req.params.id} not found`
            })
        }
        return res.json({
            message
        });
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

const deleteProductById = async (req, res) => {
    try {
        let message = await product.deleteById(+req.params.id)
        return res.json({
            message
        })
    } catch (error) {
        res.status(500).json({
            error: 'Something went wrong'
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
}