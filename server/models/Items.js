const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    cost: Number,
    date: Date,
    title: String
},
{ collection : 'Items' });

const Items = mongoose.model('Items', itemSchema);

module.exports = Items;
