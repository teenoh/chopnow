"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMenus: function fetchAllMenus(req, res) {
    var allMenus = _menu.default.fetchAllMenus();

    return res.json({
      status: 'sucess',
      data: allMenus
    }).status(200);
  },
  addAMenu: function addAMenu(req, res) {
    /*
                Expect json of the format
                {
                    id: 1,
                    day: '15/12/19',
                    meals: {
                        breakfast: [{
                            id: 1,
                            name: 'Fried Rice',
                            desc: 'Medium',
                            price: 450
                        }],
                        lunch: [],
                        dinner: []
                    },
                    vendor_id: 1
                },
            */
    var newMenu = req.body;

    var createdMeal = _menu.default.addMenu(newMenu);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;
    var foundMeal = MealService.getAMeal(id);
    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  } //   updateAMeal: (req, res) => {
  //     const { id } = req.params;
  //     const updatedMeal = req.body; // get updated meal data from body
  //     const newMeal = MealService.updateAMeal(id, updatedMeal);
  //     return res
  //       .json({
  //         status: 'success',
  //         data: newMeal
  //       })
  //       .status(200);
  //   },
  //   deleteAMeal: (req, res) => {
  //     const { id } = req.params;
  //     MealService.deleteAMeal(id);
  //     return res
  //       .json({
  //         status: 'success'
  //       })
  //       .status(204);
  //   }

};
var _default = MealController;
exports.default = _default;