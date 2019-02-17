import { Router } from 'express';
import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchAllMenus);
router.post('/', MenuController.addAMenu);
// router.get('/:id', MealController.getSingleMeal);
// router.put('/:id', MealController.updateAMeal);
// router.delete('/:id', MealController.deleteAMeal);

export default router;
