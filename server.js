var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://tuanvu288:Admin123@mern.fv27g.mongodb.net/shopDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to DB'))
    .catch(e => console.log(e.message));

var productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    description: String,
    price: Number
});

var Product = mongoose.model('Product', productSchema, 'Products');

app.get('/products', (req, res) => {
    Product.find().then(products => res.send(products), error => res.status(400).send(error));
});

app.post('/products', (req, res) => {
    var product = new Product({
        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description,
        price: req.body.price
    });
    product.save().then(product => res.send(product), error => res.status(400).send(error));
});

app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete({_id: req.params.id}).then(product => {
        if (!product) {
            res.status(400).send();
        }
        res.send(product);
    }, error => res.status(400).send(error));
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log('The server is running...');
});

