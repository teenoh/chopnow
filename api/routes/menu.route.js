import { Router } from 'express';
import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchAllMenus);
// router.get('/:id', MenuController.getSingleMenu)
router.post('/', MenuController.addAMenu);
router.put('/:id', MenuController.updateMenu)

export default router;
