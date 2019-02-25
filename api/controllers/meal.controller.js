import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals: (req, res) => {
    const allMeals = MealService.fetchAllMeals();
    return res.status(200).send({
      status: 'success',
      data: allMeals
    });
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

    return res.status(201).send({
      status: 'success',
      data: createdMeal
    });
  },
  getSingleMeal: (req, res) => {
    const { id } = req.params;
    const foundMeal = MealService.getAMeal(id);
    return res.status(200).send({
      status: 'success',
      data: foundMeal
    });
  },
  updateAMeal: (req, res) => {
    const { id } = req.params;
    const updatedMeal = req.body; // get updated meal data from body
    const newMeal = MealService.updateAMeal(id, updatedMeal);

    return res.status(200).send({
      status: 'success',
      data: newMeal
    });
  },
  deleteAMeal: (req, res) => {
    const { id } = req.params;
    MealService.deleteAMeal(id);
    return res.status(204).send({
      status: 'success'
    });
  }
};

export default MealController;
