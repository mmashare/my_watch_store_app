import  mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true,
        
    },
    Products:[
        {
        productId:{type:String},
        quantity:{type:Number,default:1,},
        price:{type:Number,required:true},
        }
    ],
    
    
},{timestamps:true},
);

export default mongoose.model("Cart",CartSchema);