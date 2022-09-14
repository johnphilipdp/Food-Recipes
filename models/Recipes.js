const mongoose = require('mongoose')

const recipesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Recipe title required']
  },
  description: {
    type: String,
    required: [true, 'Recipe description required']
  },
  image: {
    type: String,
    default: 'no-img.jpg'
  },
  ingredients: {
    type: [String],
    required: [true, 'Ingredients is required']
  }
})

module.exports = mongoose.model('Recipes', recipesSchema)