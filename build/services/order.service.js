"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderService = {
  fetchAllOrders: function fetchAllOrders() {
    return _dummyData.default.orders.map(function (order) {
      var newOrder = new _order.default();
      newOrder.id = order.id;
      newOrder.customer_id = order.customer_id;
      newOrder.vendor_id = order.vendor_id;
      newOrder.meals = order.meals;
      newOrder.created_at = order.created_at;
      return newOrder;
    });
  },
  addOrder: function addOrder(order) {
    var orderLen = _dummyData.default.orders.length;
    var lastId = _dummyData.default.orders[orderLen - 1].id;
    var newId = lastId + 1;
    order.id = newId;

    _dummyData.default.orders.push(order);

    return order;
  },
  getAnOrder: function getAnOrder(id) {
    var order = _dummyData.default.orders.find(function (order) {
      return order.id == id;
    });

    return order || {};
  },
  updateOrder: function updateOrder(id, updatedOrder) {
    var oldOrderIndex = _dummyData.default.orders.findIndex(function (meal) {
      return meal.id == id;
    });

    var oldOrder = _dummyData.default.orders[oldOrderIndex];

    var newOrder = _objectSpread({}, oldOrder, updatedOrder, {
      id: parseInt(id)
    });

    _dummyData.default.orders[oldOrderIndex] = newOrder;
    return newOrder;
  }
};
var _default = OrderService;
exports.default = _default;