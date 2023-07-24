import express from 'express';

import Ing from '../models/ing.js';

const router = express.Router();

export const createIng = async (req, res) => {
    const ing = req.body
    const newIng = new Ing(ing)
    try {
        
        await newIng.save();
        res.status(201).json(newIng);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getIng = async (req, res) => {
    
    try {
        const data = await Ing.find()
        res.json( data);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


export default router;