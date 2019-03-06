// import OrderService from '../services/order.service';

// const OrderController = {
//   fetchAllOrders: (req, res) => {
//     const allOrders = OrderService.fetchAllOrders();
//     return res.status(200)
//       .send({
//         status: 'success',
//         data: allOrders
//       });
//   },

//   addOrder: (req, res) => {
//     /*
//         Expect json of the format
//         {
//             id: 1,
//             vendor_id: 1,
//             customer_id: 4,
//             created_at: '15/12/19',
//             meals: [{
//                         id: 1,
//                         name: 'Fried Rice',
//                         desc: 'Medium',
//                         price: 450
//                     }]
//         },
//     */

//     const newOrder = req.body;
//     const createdOrder = OrderService.addOrder(newOrder);

//     return res.status(201)
//       .send({
//         status: 'success',
//         data: createdOrder
//       })
//   },
//   getSingleOrder: (req, res) => {
//     const { id } = req.params;
//     const foundOrder = OrderService.getAnOrder(id);
//     return res.status(200).send({
//       status: 'success',
//       data: foundOrder
//     });
//   },
//   updateOrder: (req, res) => {
//     const { id } = req.params;
//     const updatedOrder = req.body; // get updated order data from body
//     const newOrder = OrderService.updateOrder(id, updatedOrder);

//     return res.status(200)
//       .send({
//         status: 'success',
//         data: newOrder
//       })
//   }
// };

// export default OrderController;
