"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menu = _interopRequireDefault(require("../controllers/menu.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get('/', _menu.default.fetchAllMenus);
router.get('/:id', _menu.default.getSingleMenu);
router.post('/', _menu.default.addAMenu);
var _default = router;
exports.default = _default;