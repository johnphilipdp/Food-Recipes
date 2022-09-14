const express = require("express");
const router = express.Router();

const {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
} = require("../controllers/recipes");

router.route("/").get(getRecipes).post(addRecipe);
router.route("/:id").get(getRecipe).put(editRecipe).delete(deleteRecipe);

module.exports = router;
