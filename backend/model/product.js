import  mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
       
    },
    img:{
        type:String,
        
    },
    brand:{
        type:String,
        required:true,
        
    },
    price:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
        
    },
    
    
},{timestamps:true},
);

export default mongoose.model("Product",ProductSchema);