const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find(res.query);
    res.status(200).json({products, nbHits: products.length})
}


const getAllProducts = async (req, res) => {

    res.status(200).json({msg:'All the products real'})
}


module.exports = {
    getAllProducts,
    getAllProductsStatic
}