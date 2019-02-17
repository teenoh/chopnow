import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals: () => {
    return dummyData.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.desc = meal.desc;
      newMeal.price = meal.price;
      return newMeal;
    });
  },
  addMeal: meal => {
    const mealLen = dummyData.meals.length;
    const lastId = dummyData.meals[mealLen - 1].id;
    const newId = lastId + 1;

    meal.id = newId;

    dummyData.meals.push(meal);
    return meal;
  },
  getAMeal: id => {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || {};
  },
  updateAMeal: (id, updatedMeal) => {
    const oldMealIndex = dummyData.meals.findIndex(meal => meal.id == id);
    const oldMeal = dummyData.meals[oldMealIndex];
    const newMeal = { ...oldMeal, ...updatedMeal, id: parseInt(id) };

    dummyData.meals[oldMealIndex] = newMeal;

    return newMeal;
  },
  deleteAMeal: id => {
    dummyData.meals = dummyData.meals.filter(meal => meal.id != id);
    return;
  }
};

export default MealService;
