import express from "express";
import {createCart,deleteCart,editCart,getCart,AddProducttoCart} from "../controller/cart.controller.js"
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();


// get all product && also you also can use query to fetch product by category
router.get("/find/:id",verifyToken,getCart)
// upload a product.
router.post("/",verifyToken,createCart)
// delete a product.
router.delete("/:id",verifyToken,deleteCart)
// edit a product.
router.put("/:id",verifyToken,editCart)

router.put("/edit/:id",verifyToken,AddProducttoCart)

export default router;
