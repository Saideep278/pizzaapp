import express from 'express';

import { createPizza , getPizza } from '../controllers/pizza.js';

const router = express.Router();


router.post('/',createPizza);

router.get('/',getPizza)




export default router;