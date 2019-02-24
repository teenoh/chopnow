"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'sucess',
      data: allMeals
    }).status(200);
  },
  addAMeal: function addAMeal(req, res) {
    /*
            Expect json of the format
            {
                name: "some food",
                size: "large",
                price: 300,
            }
        */
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    var foundMeal = _meal.default.getAMeal(id);

    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  },
  updateAMeal: function updateAMeal(req, res) {
    var id = req.params.id;
    var updatedMeal = req.body; // get updated meal data from body

    var newMeal = _meal.default.updateAMeal(id, updatedMeal);

    return res.json({
      status: 'success',
      data: newMeal
    }).status(200);
  },
  deleteAMeal: function deleteAMeal(req, res) {
    var id = req.params.id;

    _meal.default.deleteAMeal(id);

    return res.json({
      status: 'success'
    }).status(204);
  }
};
var _default = MealController;
exports.default = _default;