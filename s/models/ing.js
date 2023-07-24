import mongoose from 'mongoose';

const ingschema = mongoose.Schema({ 

    name: String,
    price: String,
    
    selectedFile: String,
    
})

var Ing = mongoose.model('Ing', ingschema);

export default Ing;