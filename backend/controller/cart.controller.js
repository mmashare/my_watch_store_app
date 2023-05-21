import Cart from "../model/cart.js"

export const createCart = async (req,res)=>{
//    console.log(req.body)
     const cart = new Cart(req.body)
    
    
    try {
        const savedCart = await cart.save()
        res.status(201).json(savedCart)
    } catch (error) {
        res.status(402).json({message:error})
    }

}

export const editCart = async (req,res)=>{
    // yaha cart id deni hai userId nhi, becoz ek userID ke many cart available hoge db me.
    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id,
           {$set:req.body},
           { new:true}
        )

        res.status(201).json(updateCart)
    } catch (error) {
        res.status(403).json({message:error})
    }
}


export const deleteCart = async (req,res) =>{
    // console.log(req.params.id)
    try {
//    let mydeleteCart = await Cart.findByIdAndRemove(req.params.id)
   let mydeleteCart = await Cart.findByIdAndRemove(req.params.id)  
        // res.status(201).json("Cart Removed Sucessfully")
        res.status(201).json(mydeleteCart)   
    } catch (error) {

        res.status(403).json({message:error})
    }
}

export const getCart = async (req,res)=>{
    // console.log(req.params.id)
    try {
    let cart
    if(req.params.id){
     cart = await Cart.find({userID:req.params.id})
     res.status(201).json(cart);  
    }else{
    res.status(403).json({message:"no userID given by client"})
    }
    
    
      
    } catch (error) {
    res.status(403).json({message:`${error}`})
    }

}

export const AddProducttoCart = async (req,res)=>{

     console.log("params.id",req.params.id)
     console.log("params quantity",req.body.quantity)
    try {
                let cart = await Cart.findByIdAndUpdate(req.params.id,
                    {$set :{Products:[{productId:req.body.productId,quantity:req.body.quantity,price:req.body.price}]}},
    
                { new:true})
             
                res.status(201).json(cart)   
            } catch (error) {
        
                res.status(403).json({message:error})
            }

}


