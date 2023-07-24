import express from 'express';

import Pizza from '../models/pizza.js';

const router = express.Router();

export const createPizza = async (req, res) => {
    const pizza = req.body
    const newPizza = new Pizza(pizza)
    try {
        
        await newPizza.save();
        res.status(201).json(newPizza);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPizza = async (req, res) => {
    
    try {
        const data = await Pizza.find()
        res.json( data);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


export default router;