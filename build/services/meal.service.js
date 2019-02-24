"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    return _dummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.desc = meal.desc;
      newMeal.price = meal.price;
      return newMeal;
    });
  },
  addMeal: function addMeal(meal) {
    var mealLen = _dummyData.default.meals.length;
    var lastId = _dummyData.default.meals[mealLen - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _dummyData.default.meals.push(meal);

    return meal;
  },
  getAMeal: function getAMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    return meal || {};
  },
  updateAMeal: function updateAMeal(id, updatedMeal) {
    var oldMealIndex = _dummyData.default.meals.findIndex(function (meal) {
      return meal.id == id;
    });

    var oldMeal = _dummyData.default.meals[oldMealIndex];

    var newMeal = _objectSpread({}, oldMeal, updatedMeal, {
      id: parseInt(id)
    });

    _dummyData.default.meals[oldMealIndex] = newMeal;
    return newMeal;
  },
  deleteAMeal: function deleteAMeal(id) {
    _dummyData.default.meals = _dummyData.default.meals.filter(function (meal) {
      return meal.id != id;
    });
    return;
  }
};
var _default = MealService;
exports.default = _default;