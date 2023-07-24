import express from 'express';

import { createIng , getIng } from '../controllers/ing.js';

const router = express.Router();


router.post('/',createIng);

router.get('/',getIng)




export default router;