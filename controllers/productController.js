const productModel = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const result = await productModel.getAllProducts();
        res.json(result);
    } catch (err) {
        console.error('Error getting all products:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getProductById = async (req, res) => {
    //TODO
};

const createProduct = async (req, res) => {
    //TODO
};

const UpdateProduct = async (req, res) => {
    //TODO
};

const deleteProduct = async (req, res) => {
    //TODO
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    UpdateProduct,
    deleteProduct,
}