import React,{useEffect, useState} from 'react'
import styles from "./addtocartShowcase.module.css"
import Imagess from "../../public/static/images/sneaker.jpg"
import Image from 'next/image';
import axios from 'axios';
const AddToCartShowcase = ({productID,token,userID,AddQuantityToCart}) => {
  
    const [myValue,setMyValue] = useState(0);
    const [fulldata,setFullData] = useState();
    console.log("token",token)
    console.log("userID",userID)
   console.log("productID",productID)
    const decValue = ()=>{
        if(myValue >= 2){
                setMyValue(myValue-1)
        }
    }
    const incValue = ()=>{
        if(myValue <= 9){
            setMyValue(myValue+1)
    }
    }

    const getPost = async()=>{
        if(productID){
           
            let res = await axios.get(
                `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product/find/${productID.Products[0].productId}`
              );
             console.log(fulldata && fulldata.data._id) 
              setFullData(res)
              
              
        }        
         
    }

    const DeletePost = async(id)=>{
      
         console.log("id",id)
          let res = await axios.delete(
              `${process.env.NEXT_PUBLIC_BAJE_URL}/api/cart/${id}`,{
                headers: {
                    'content-type': 'application/json',
                    'token': `Bearer,${token}`
                  }
            },
            );
         console.log(res)
          
          location.reload();    
    }


    const excerpt = (str) => {
        if (str && str.length > 30) {
          str = str.substring(0, 12) + "... ";
        }
        return str;
      };

    useEffect(()=>{
        // console.log("productID",productID && productID.Products[0].productId)
        setMyValue(productID.Products[0].quantity)
        // console.log("productID",productID && productID._id)
        productID && getPost()
    },[productID])


  return (
    <section className={styles.container}>
        {/* image section */}
        <figure className={styles.imgContainer}>
        <Image src={fulldata && fulldata.data.img} className={styles.imgg} height="500" width="500"></Image>
        </figure>
        {/* title and category container */}
        <section className={styles.firstContainer}>
                <div className={styles.titleContainer} style={{color:"#111111"}}>
                {excerpt(fulldata && fulldata.data.name)}
                </div>
                <div className={styles.categoryContainer}>
                    <p className={styles.categorytitle} style={{color:"#111111",fontWeight:"600"}}>For {fulldata && fulldata.data.type}</p>
                </div>
        </section>
        {/* price and incdecbtn and remove container */}
        <section className={styles.secContainer}>
                <div className={styles.priceContainer}>
                  <p className={styles.pricetitle} style={{color:"#111111"}}>${fulldata && fulldata.data.price}</p>
                </div>
                <div className={styles.IncAndDecContainer} >
                    <button className={styles.incBtn} onClick={decValue} style={{backgroundColor:"#f3f3f3"}}>-</button>
                    <p className={styles.inputValue} style={{color:"#111111"}}>{myValue}</p>
                    <button className={styles.decBtn}  onClick={incValue} style={{backgroundColor:"#f3f3f3"}}>+</button>
                    <button className={styles.AddMoreQuantityBTn} onClick={()=>{AddQuantityToCart(productID._id,myValue,productID.Products[0].price,productID.Products[0].productId)}}>Add</button>
                    
                </div>
                <div className={styles.RemoveContainer}>
                    <p className={styles.remvBtn} onClick={()=>{DeletePost(`${productID._id}`)}} style={{color:"#111111"}}>Remove</p>
                    {/*  */}
                </div>
        </section>
    </section>
  )
}

export default AddToCartShowcase