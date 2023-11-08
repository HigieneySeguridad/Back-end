const mongoose = require('mongoose')


const Image = mongoose.model('Image', {
    filename: String,
    path: String,
    date: Date,
    _id: String,
  });

  
module.exports= {Image}