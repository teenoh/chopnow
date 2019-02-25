"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  fetchAllMenus: function fetchAllMenus() {
    return _dummyData.default.menus.map(function (menu) {
      var newMenu = new _menu.default();
      newMenu.id = menu.id;
      newMenu.day = menu.day;
      newMenu.meals = menu.meals;
      newMenu.vendor_id = menu.vendor_id;
      return newMenu;
    });
  },
  addMenu: function addMenu(menu) {
    var menuLen = _dummyData.default.menus.length;
    var lastId = _dummyData.default.menus[menuLen - 1].id;
    var newId = lastId + 1;
    menu.id = newId;

    _dummyData.default.menus.push(menu);

    return menu;
  }
};
var _default = MenuService;
exports.default = _default;