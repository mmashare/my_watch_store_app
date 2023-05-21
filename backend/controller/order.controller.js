import Order from "../model/order.js"

export const createOrder = async (req,res)=>{
    const order = new Order(req.body)

    try {
        const savedOrder = await order.save()
        res.status(201).json(savedOrder)
    } catch (error) {
        res.status(402).json({message:error})
    }

}

export const editOrder = async (req,res)=>{
    
    try {
        const updateOrder = await Order.findByIdAndUpdate(req,params.id,
           {$set:req.body},
           { new:true}
        )

        res.status(201).json(updateOrder)
    } catch (error) {
        res.status(403).json({message:error})
    }
}


export const deleteOrder = async (req,res) =>{

    try {
    await Order.findByIdAndDelete(req.params.id) 
        res.status(201).json("Cart Removed Sucessfully")   
    } catch (error) {

        res.status(403).json({message:error})
    }
}

export const getOder = async (req,res)=>{

    try {
    const order = await Order.findOne({userID:req.params.id})
    
    res.status(201).json(order);    
    } catch (error) {
    res.status(403).json({message:error})
    }

}


