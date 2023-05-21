import  mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true,
        
    },
    products:[
        {
        productId:{type:String},
        quantity:{type:Number,default:1,},
        price:{type:Number,required:true,},
        }
    ],
    amount:{
        type:Number,
        require:true
    },
    address:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        default:"pending"
    }
    
    
},{timestamps:true},
);

export default mongoose.model("Order",OrderSchema);