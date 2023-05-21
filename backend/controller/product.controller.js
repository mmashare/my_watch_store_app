import Product from "../model/product.js";

export const CreateProduct = async (req,res)=>{

    const newProduct = new Product(req.body);

    try {
       const savedProduct = await newProduct.save();
       
       res.status(203).json(savedProduct);
    } catch (error) {
        res.status(402).json({message:error})
    }

}



export const UpdateProduct = async (req,res)=>{
   
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true}
        );

        res.status(203).json(updateProduct);
    } catch (error) {
        res.status(405).json({message:error});
    }


}


export const deleteProduct = async (req,res)=>{
    try {
          await Product.findByIdAndDelete(req.params.id);
          res.status(201).json("product has been deleted"); 
    } catch (error) {
       return  res.status(402).json({message:error})
    }
}


export const getSingleProduct = async (req,res)=>{
    try {
          const product = await Product.findById(req.params.id);
          res.status(201).json(product); 
    } catch (error) {
       return  res.status(402).json({message:error})
    }
}


export const getProduct = async (req,res)=>{
    const qNew = req.query.New;
    const qCategory = req.query.category;
    const qBrand = req.query.Brand;
    const gtPrice = req.query.gtprice;
    const ltPrice = req.query.ltprice;
    console.log(parseInt(gtPrice))
    console.log(parseInt(ltPrice))
    // you can add query by yourselves as many as u want;
    try {

        let products;
        if(qNew){
            products = await Product.find().sort({
                createdAt:-1
            }).limit(5)

        }else if(gtPrice && ltPrice){
            products = await Product.find({
                price:{$lt:parseInt(ltPrice),$gt:parseInt(gtPrice)}
            })

        }else if(qCategory){
            products = await Product.find({
                type:{
                    $in:[qCategory]
                },
            })

        }else if(qBrand){
            products = await Product.find({
                brand:{
                    $in:[qBrand]
                },
            })

        }else{
            products = await Product.find();
        }

        res.status(201).json(products)
          
    } catch (error) {
       return  res.status(402).json({message:error})
    }
}
