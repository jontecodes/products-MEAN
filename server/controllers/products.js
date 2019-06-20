var mongoose = require('mongoose');

require('../models/product');
const Product = mongoose.model('Product');

module.exports = {
    index: (req,res) => {
        Product.find({}, (err, products) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: products});
            }
        })
    },
    show: (req,res) => {
        Product.findOne({_id: req.params.id}, (err, product) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', result: product});
            }
        })
    },
    create: (req,res) => {
        Product.create(req.body, (err, results) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: results});
            }
        })
    },
    update: (req, res) => {
        Product.update({_id: req.params.id}, req.body, (err, result) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else{
                res.json({message: 'Success', results: result});
            }
        })

    },
    destroy: (req, res) => {
        Product.remove({_id: req.params.id}, (err, result) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else{
                res.json({message: 'Success', results: result});
            }
        })
    }
}