var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required for Products'],
        minlength: [3, 'Need more info ya puss!'],
        maxlength: [20, 'I think you have too much time on your hands there bud']
    },
    price: {
        type: Number,
        required: [true, "It can't be free!"]
    },
    url: {
        type: String,
        required: [true, 'You need a pic ya d##k!']
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);