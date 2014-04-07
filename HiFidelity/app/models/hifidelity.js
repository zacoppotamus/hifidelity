var mongoose = require('mongoose');

module.exports = mongoose.model('hifidelity', {
    title :  String,
    year  :  Number,
    seen  :  Boolean
})