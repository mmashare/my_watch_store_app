import express from "express";
import {getProduct,getSingleProduct,CreateProduct,deleteProduct,UpdateProduct} from '../controller/product.controller.js'
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();
// get all product && also you also can use query to fetch product by category
router.get("/",getProduct)
// upload a product.iss req path ka koi use nhi hai iss website me becoz ham product only get krege post,edit,delete nhi krege uske liye app big hona chiye
router.post("/",verifyToken,CreateProduct)
// delete a product.
router.delete("/:id",verifyToken,deleteProduct)
// edit a product.
router.put("/:id",verifyToken,UpdateProduct)
// get a single product.
router.get("/find/:id",getSingleProduct)
export default router;

