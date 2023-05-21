import express from "express";
import { updateUser,deleteUser} from "../controller/user.controller.js"
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();


// verifyToken check that the user who wants to delete or update something has account or its id match with 
// db id if yes then he can changed the db data.

// update user
router.put("/:id",verifyToken,updateUser);

// delete user

router.delete("/:id",verifyToken,deleteUser);


// yaha hamme verifyToken means user ka login hona jaruri nhi hai because unlogin user bhi koi bhi channel search karke video watch kar skta hai.

//// get a user

// router.get("/find/:id",getUser);





export default router;