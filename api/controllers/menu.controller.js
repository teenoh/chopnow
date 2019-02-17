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

//   addAMeal: (req, res) => {
//     /*
//                 Expect json of the format
//                 {
//                     name: "some food",
//                     size: "large",
//                     price: 300,
//                 }
//             */

//     const newMeal = req.body;
//     const createdMeal = MealService.addMeal(newMeal);

//     return res
//       .json({
//         status: 'success',
//         data: createdMeal
//       })
//       .status(201);
//   },
//   getSingleMeal: (req, res) => {
//     const { id } = req.params;
//     const foundMeal = MealService.getAMeal(id);
//     return res
//       .json({
//         status: 'success',
//         data: foundMeal
//       })
//       .status(200);
//   },
//   updateAMeal: (req, res) => {
//     const { id } = req.params;
//     const updatedMeal = req.body; // get updated meal data from body
//     const newMeal = MealService.updateAMeal(id, updatedMeal);

//     return res
//       .json({
//         status: 'success',
//         data: newMeal
//       })
//       .status(200);
//   },
//   deleteAMeal: (req, res) => {
//     const { id } = req.params;
//     MealService.deleteAMeal(id);

//     return res
//       .json({
//         status: 'success'
//       })
//       .status(204);
//   }
};

export default MealController;
