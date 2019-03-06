// import MenuService from '../services/menu.service';

// const MenuController = {
//   fetchAllMenus: (req, res) => {
//     const allMenus = MenuService.fetchAllMenus();
//     return res.status(200).send({
//       status: 'success',
//       data: allMenus
//     });
//   },

//   addAMenu: (req, res) => {
//     /*
//                 Expect json of the format
//                 {
//                     id: 1,
//                     day: '15/12/19',
//                     meals: {
//                         breakfast: [{
//                             id: 1,
//                             name: 'Fried Rice',
//                             desc: 'Medium',
//                             price: 450
//                         }],
//                         lunch: [],
//                         dinner: []
//                     },
//                     vendor_id: 1
//                 },
//             */

//     const newMenu = req.body;
//     const createdMenu = MenuService.addMenu(newMenu);

//     return res.status(201).send({
//       status: 'success',
//       data: createdMenu
//     });
//   },
//   getSingleMenu: (req, res) => {
//     const { id } = req.params;
//     const foundMenu = MenuService.getAMenu(id);
//     return res.status(200).send({
//       status: 'success',
//       data: foundMenu
//     });
//   }
// };

// export default MenuController;
