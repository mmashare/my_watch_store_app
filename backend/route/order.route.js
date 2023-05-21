import express from "express";
import {createOrder,deleteOrder,getOder,editOrder} from "../controller/order.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();


// get all product && also you also can use query to fetch product by category
router.get("/find/:id",verifyToken,getOder)
// upload a product.
router.post("/",verifyToken,createOrder)
// delete a product.
router.delete("/:id",verifyToken,deleteOrder)
// edit a product.
router.put("/:id",verifyToken,editOrder)

export default router;
