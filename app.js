const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})


module.exports = app;