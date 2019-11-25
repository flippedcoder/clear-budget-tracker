const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    completeByDate: Date,
    isComplete: Boolean,
    title: String
},
{ collection : 'Goals' });

const Goals = mongoose.model('Goals', goalSchema);

module.exports = Goals;
