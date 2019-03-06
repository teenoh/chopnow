import MealService from '../services/meal.service';
import models from '../models';

class MealController {
  static async fetchAllMeals(req, res) {
    try {
      const meals = await models.Meal.findAll();
      console.log(meals);
      return res.status(200).json({
        status: 'success',
        data: meals
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  }

  static async addAMeal(req, res) {
    try {
      const { name, price } = req.body;
      const desc = req.body.desc || '';
      const meal = await models.Meal.create({ name, price, desc, catererId: 1 });
      return res.status(201).json({
        status: 'success',
        data: {
          id: meal.id,
          name: meal.name,
          price: meal.price,
          imageUrl: meal.imageUrl,
          desc: meal.desc,
          catererId: meal.catererId
        }
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  }

  static async getSingleMeal(id) {
    try {
      const foundMeal = await models.Meal.findOne({ where: { id } });
      return foundMeal;
    } catch (err) {
      throw Error(`Meal with ID ${id} does not exist`);
    }
  }

  static async updateAMeal(req, res) {
    try {
      const { id } = req.params;

      const meal = await models.Meal.findOne({ where: { id } });
      if (!meal) {
        throw Error(`Meal with ID ${id} does not exist`);
      }

      const updates = {
        name: req.body.name || meal.name,
        price: req.body.price || meal.price,
        desc: req.body.desc || meal.desc
      };

      const updatedMeal = await models.Meal.update(updates, { where: { id } });

      return res.status(200).json({
        status: 'success',
        data: await MealController.getSingleMeal(id)
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  }

  static async deleteAMeal(req, res) {
    try {
      const { id } = req.params;

      const meal = await models.Meal.findOne({ where: { id } });
      if (!meal) {
        throw Error(`Meal with ID ${id} does not exist`);
      }

      await meal.destroy();

      return res.status(200).send({
        status: 'success',
        message: 'Meal Deleted'
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  }
}

export default MealController;
