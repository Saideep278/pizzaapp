import mongoose from 'mongoose';

const pizzaschema = mongoose.Schema({ 
    name: String,
    type : String,
    price: String,
    description: String,
    ingredients: [String],
    toppings : [String],
    selectedFile: String,
    
})

var Pizza = mongoose.model('Pizza', pizzaschema);

export default Pizza;
/**  
   {  
    "name": "Paneer Tikka",
    "type": "veg", 
    "price": 290,
      "description": "This is popular italian pizza flavoured with marinated tikka sauce and paneer", 
   
   "ingredients": [ "dough/flour", "pizza saucce", "pizza sauce seasoning", "cheese" ],
   "topping": [ "Paneer", "Fried Onion", "Green olive", "Capsicum", "Red peprika" ],
   "selectedFile": "https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg",
    
    }
*/