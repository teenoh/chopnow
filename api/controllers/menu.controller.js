// import MenuService from '../services/menu.service';
import models from '../models';
// import moment from 'moment';

class MenuController {
  static async fetchAllMenus(req, res) {
    try {
      const menus = await models.Menu.findAll({
        include: [
          {
            model: models.User,
            as: 'caterer',
            attributes: [['businessName', 'name'], 'id']
          },
          {
            model: models.Meal,
            as: 'meals',
            attributes: ['id', 'name', 'price', 'desc', 'imageUrl']
          }
        ]
      });

      return res.status(200).json({
        status: 'success',
        data: menus
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  }

  static async addAMenu(req, res) {
    try {
      const { date, meals } = req.body;
      const defaultDate = new Date();

      const menuDate = date || defaultDate;
      const menuMeals = [...new Set(meals)];

      // console.log('\n\n', menuMeals, '\n\n\n')

      let newMenu;

      await models.Menu.findOrCreate({
        where: { date: menuDate, catererId: 1 },
        include: [
          {
            model: models.User,
            as: 'caterer'
          }
        ]
      }).spread(async (menu, created) => {
        if (!created) {
          return res.status(400).json({ error: 'Menu for this date is already set' });
        }

        const meals = await Promise.all(
          await menuMeals.map(async meal => {
            return await models.MenuMeal.findOrCreate({
              where: { mealId: meal.id, category: meal.category, menuId: menu.id }
            });
          })
        );

        newMenu = await MenuController.getSingleMenu(menu.id);

        return res.status(201).json({
          status: 'success',
          data: newMenu
        });
      });
    } catch (err) {
      console.log('\n\n\n error ==> \n\n',err);
      return res.status(400).json({
        status: 'error',
        message: err
      });
    }
  }

  static async getSingleMenu(id) {
    try {
      const foundMenu = await models.Menu.findOne({
        where: { id },
        include: [
          {
            model: models.User,
            as: 'caterer',
            attributes: [['businessName', 'name'], 'id']
          },
          {
            model: models.Meal,
            as: 'meals',
            attributes: ['id', 'name', 'price', 'desc', 'imageUrl']
          }
        ]
      });
      return foundMenu;
    } catch (err) {
      // console.log("err ==>", err, '\n\n\n\n')
      throw Error(`Menu with ID ${id} does not exist`);
    }
  }

  // static async updateMenu(req, res) {
  //   try {
  //     const { id } = req.params;

  //     const meal = await models.Meal.findOne({ where: { id } });
  //     if (!meal) {
  //       throw Error(`Meal with ID ${id} does not exist`);
  //     }

  //     const updates = {
  //       name: req.body.name || meal.name,
  //       price: req.body.price || meal.price,
  //       desc: req.body.desc || meal.desc
  //     };

  //     const updatedMeal = await models.Meal.update(updates, { where: { id } });

  //     return res.status(200).json({
  //       status: 'success',
  //       data: await MealController.getSingleMeal(id)
  //     });
  //   } catch (err) {
  //     return res.status(400).json({
  //       status: 'error',
  //       message: err.message
  //     });
  //   }
  // }

  // static async deleteAMeal(req, res) {
  //   try {
  //     const { id } = req.params;

  //     const meal = await models.Meal.findOne({ where: { id } });
  //     if (!meal) {
  //       throw Error(`Meal with ID ${id} does not exist`);
  //     }

  //     await meal.destroy();

  //     return res.status(200).send({
  //       status: 'success',
  //       message: 'Meal Deleted'
  //     });
  //   } catch (err) {
  //     return res.status(500).json({
  //       status: 'error',
  //       message: err.message
  //     });
  //   }
  // }
}

export default MenuController;
