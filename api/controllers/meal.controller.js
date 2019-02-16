import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals: (req, res) => {
    const allMeals = MealService.fetchAllMeals();
    return res
      .json({
        status: 'sucess',
        data: allMeals
      })
      .status(200);
  },

  addAMeal: (req, res) => {
    /*
            Expect json of the format
            {
                name: "some food",
                size: "large",
                price: 300,
            }
        */

    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);

    return res
      .json({
        status: 'success',
        data: createdMeal
      })
      .status(201);
  },
  getSingleMeal: (req, res) => {
    const { id } = req.params;
    const foundMeal = MealService.getAMeal(id);
    return res
      .json({
        status: 'success',
        data: foundMeal
      })
      .status(200);
  },
  updateAMeal: (req, res) => {
    const { id } = req.params;
    const updatedMeal = req.body; // get updated meal data from body
    const newMeal = MealService.updateAMeal(id, updatedMeal);

    return res.json({
      status: 'success',
      data: newMeal
    });
  },
};

export default MealController;
