import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.fetchAllOrders);

// router.get('/:id', OrderController.getSingleOrder)
router.post('/', OrderController.addOrder);
router.put('/:id', OrderController.updateOrder);


export default router;
