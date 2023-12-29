const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const Product = require('../models/products.js');

let products = [];
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
router.get('/', (req, res) => {
    if (products.length > 0) {
        res.render('productList', { products });
    } else {
        res.status(404).send('No products found.');
    }
});

router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.render('productDetail', { product });
    } else {
        res.status(404).render('404');
    }
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const { productName } = req.body;
    if (productName) {
        const newProduct = new Product(products.length + 1, productName);
        products.push(newProduct);
        // Redirect to productList.ejs after creating a new product
        res.redirect('/products');
    } else {
        res.status(400).send('Product name cannot be empty!');
    }
});

module.exports = router;
