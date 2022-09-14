const Recipes = require('../models/Recipes')

exports.getRecipes = async(req,res,next) => {
  const recipes = await Recipes.find()

  res.status(200).json({
    success: true,
    total: recipes.length,
    data: recipes
  })

}

exports.getRecipe = async(req,res,next) => {
  const recipe = await Recipes.findById(req.params.id)
  
  res.status(200).json({
    success: true,
    data: recipe
  })

}

exports.addRecipe = async(req,res,next) => {
  try {
    const recipe = await Recipes.create(req.body)
 
    res.status(200).json({
      success: true,
      data: recipe
    })
  } catch (error) {
    next(error)
  }
}

exports.editRecipe = async(req,res,next) => {
  const recipe = await Recipes.findByIdAndUpdate(req.params.id, {
    new: true,
    runValidators: true
  })
 
  res.status(200).json({
    success: true,
    data: recipe
  })
}

exports.deleteRecipe = async(req,res,next) => {
  await Recipes.findByIdAndDelete(req.params.id)

  
  res.status(200).json({
    success: true,
    data: {}
  })
}