import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.js";


export const Signup = async (req,res) => {
    // salt means how many times password hased
    const salt = bcrypt.genSaltSync(10);
    // now put the real password with hash algorithm
    const hashPassword = bcrypt.hashSync(req.body.password,salt);
    
    const newUser =  new User({
        name : req.body.name,
        email:req.body.email,
        password:hashPassword,
    });

    try {
        const SavedUser = await newUser.save();
        const {password,...newSavedData} = SavedUser._doc;
        console.log(newSavedData)
        
        res.status(201).json("user has been connected");
    } catch (error) {
        res.status(403).json({message:error});
    }

    }


export const Login = async (req,res)=>{

    try {
        const user = await User.findOne({email:req.body.email});
        
        if(!user){
            return res.status(403).json({message:"you don't have account yet"});
        }

        const isCorrect = await bcrypt.compare(req.body.password,user.password)
        
        if(!isCorrect){
            return res.status(402).send("Password is not correct") 
        }
        // here we make token by using their userID
        const token = jwt.sign({id:user._id},process.env.JWT,{expiresIn:'3d'})
        // here we extract password from all user data.becasue we don't send password to frontend
        const {password,...other} = user._doc;

        // res.cookie('access_token',token,{
        //     httpOnly:true
        // })

         return res.status(201)
        .json({userdata:other,access_token: token});

    } catch (error) {
        
        return res.status(403)
        .json({message:'you Write something wrong'});
    }

}

export const Logout = async (req,res)=>{
   
        console.log(req.body)

        // res.cookie('access_token',"",{
        //     httpOnly:true
        // })

         return res.status(201)
        .json({message:"user has been logout"});

    
}