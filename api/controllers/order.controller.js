// import OrderService from '../services/order.service';
import models from '../models';

class OrderController {
  static async fetchAllOrders(req, res) {
    try {
      const allOrders = await models.Order.findAll({
        include: [
          {
            model: models.User,
            as: 'customer',
            attributes: ['firstName', 'lastName', 'id']
          },
          {
            model: models.Meal,
            as: 'meals',
            attributes: ['id', 'name', 'price', 'desc', 'imageUrl']
          }
        ],
        attributes: ['id']
      });

      return res.status(200).json({
        status: 'success',
        data: allOrders
      });
    } catch (err) {
    //   console.log(err);
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  }

  static async addOrder(req, res) {
    try {
      const { customer, meals } = req.body;

      const uniqueItems = [...new Set(meals)]; //unique order items

      const newOrder = await models.Order.create(
        { userId: customer },
        { include: [{ model: models.User, as: 'customer' }], attributes: ['id'] }
      );

    //   populate orderItems
      await Promise.all(
        await uniqueItems.map(async orderItem => {
          return await models.OrderItem.findOrCreate({
            where: { mealId: orderItem.id, quantity: orderItem.quantity, orderId: newOrder.id }
          });
        })
      );

      const fullNewOrder = await OrderController.getSingleOrder(newOrder.id);

      return res.status(201).json({
        status: 'success',
        data: fullNewOrder
      });
    } catch (err) {
    //   console.log('\n\n\n error ==> \n\n', err);
      return res.status(400).json({
        status: 'error',
        message: err
      });
    }
  }

  static async updateOrder(req, res) {
    try {
      const {
        params: { id },
        body: { meals, customer }
      } = req;

      const order = await models.Order.findOne({ where: { id, userId: customer } });

      if (!order) {
        throw Error(`Order with ID ${id} does not exist`);
      }

      const uniqueMeals = [...new Set(meals)]; // make sure all meal instances are unique

      // clear existing meals
      await order.setMeals([], { through: models.OrderItem });

      // create new orderitems and assign to order
      await Promise.all(
        await uniqueMeals.map(async meal => {
          return await models.OrderItem.findOrCreate({
            where: { mealId: meal.id, quantity: meal.quantity, orderId: order.id }
          });
        })
      );

      return res.status(200).json({
        status: 'success',
        data: await OrderController.getSingleOrder(id)
      });
    } catch (err) {
    //   console.log('\n\n\\n\n\n\n\n', err);
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  }

  static async getSingleOrder(id) {
    try {
      const foundOrder = await models.Order.findOne({
        where: { id },
        include: [
          {
            model: models.User,
            as: 'customer',
            attributes: ['firstName', 'lastName', 'id']
          },
          {
            model: models.Meal,
            as: 'meals',
            attributes: ['id', 'name', 'price', 'desc', 'imageUrl']
          }
        ]
      });
      return foundOrder;
    } catch (err) {
      // console.log("err ==>", err, '\n\n\n\n')
      throw Error(`Order with ID ${id} does not exist`);
    }
  }
}

export default OrderController;
