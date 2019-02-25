"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchAllMenus: function fetchAllMenus(req, res) {
    var allMenus = _menu.default.fetchAllMenus();

    return res.status(200).send({
      status: 'success',
      data: allMenus
    });
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

    var createdMenu = _menu.default.addMenu(newMenu);

    return res.status(201).send({
      status: 'success',
      data: createdMenu
    });
  },
  getSingleMenu: function getSingleMenu(req, res) {
    var id = req.params.id;

    var foundMenu = _menu.default.getAMenu(id);

    return res.status(200).send({
      status: 'success',
      data: foundMenu
    });
  }
};
var _default = MenuController;
exports.default = _default;