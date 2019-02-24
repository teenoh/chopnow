import dummyData from '../utils/dummyData';
import Order from '../models/order.model';
const OrderService = {
  fetchAllOrders: () => {
    return dummyData.orders.map(order => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.customer_id = order.customer_id;
      newOrder.vendor_id = order.vendor_id;
      newOrder.meals = order.meals;
      newOrder.created_at = order.created_at;
      return newOrder;
    });
  },
  addOrder: order => {
    const orderLen = dummyData.orders.length;
    const lastId = dummyData.orders[orderLen - 1].id;
    const newId = lastId + 1;
    order.id = newId;
    dummyData.orders.push(order);
    return order;
  },
  updateOrder: (id, updatedOrder) => {
    const oldOrderIndex = dummyData.orders.findIndex(meal => meal.id == id);
    const oldOrder = dummyData.orders[oldOrderIndex];
    const newOrder = { ...oldOrder,
      ...updatedOrder,
      id: parseInt(id)
    };
    dummyData.orders[oldOrderIndex] = newOrder;
    return newOrder;
  }
};
export default OrderService;
//# sourceMappingURL=order.service.js.map