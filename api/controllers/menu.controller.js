import MenuService from '../services/menu.service';

const MealController = {
  fetchAllMenus: (req, res) => {
    const allMenus = MenuService.fetchAllMenus();
    return res
      .json({
        status: 'sucess',
        data: allMenus
      })
      .status(200);
  },

  addAMenu: (req, res) => {
    /*
                Expect json of the format
                {
                    id: 1,
                    day: '15/12/19',
                    meals: {
                        breakfast: [{
                            id: 1,
                            name: 'Fried Rice',
                            desc: 'Medium',
                            price: 450
                        }],
                        lunch: [],
                        dinner: []
                    },
                    vendor_id: 1
                },
            */

    const newMenu = req.body;
    const createdMeal = MenuService.addMenu(newMenu);

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
  }
};

export default MealController;
