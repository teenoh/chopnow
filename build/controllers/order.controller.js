"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  fetchAllOrders: function fetchAllOrders(req, res) {
    var allOrders = _order.default.fetchAllOrders();

    return res.json({
      status: 'sucess',
      data: allOrders
    }).status(200);
  },
  addOrder: function addOrder(req, res) {
    /*
        Expect json of the format
        {
            id: 1,
            vendor_id: 1,
            customer_id: 4,
            created_at: '15/12/19',
            meals: [{
                        id: 1,
                        name: 'Fried Rice',
                        desc: 'Medium',
                        price: 450
                    }]
        },
    */
    var newOrder = req.body;

    var createdOrder = _order.default.addOrder(newOrder);

    return res.json({
      status: 'success',
      data: createdOrder
    }).status(201);
  },
  updateOrder: function updateOrder(req, res) {
    var id = req.params.id;
    var updatedOrder = req.body; // get updated order data from body

    var newOrder = _order.default.updateOrder(id, updatedOrder);

    return res.json({
      status: 'success',
      data: newOrder
    }).status(200);
  }
};
var _default = OrderController;
exports.default = _default;