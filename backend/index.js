import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./route/auth.js";
import userRoutes from "./route/user.route.js"
import productRoutes from "./route/product.route.js"
import cartRoutes from "./route/cart.route.js";
import orderRoutes from "./route/order.route.js";
const app = express();
dotenv.config()
mongoose.set("strictQuery", true);
const Connect = ()=>{
    mongoose.connect(process.env.MONGO,{
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
       
        ).then(
        ()=>{
          console.log("Db is COnnected")  
        }
    ).catch(
        (err)=>{
            console.log(`err happend - ${err}`)
        }
    )
};

app.use(cookieParser())
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/api/product/",productRoutes)
app.use("/api/users/",userRoutes)
app.use("/api/auth/",authRoutes)
app.use("/api/cart/",cartRoutes)
app.use("/api/order/",orderRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    Connect();
    console.log(`App is Running on ${PORT} port`)
   
})

