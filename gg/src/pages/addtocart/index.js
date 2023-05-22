import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { useState,useEffect } from 'react'
import styles from "./addtoCart.module.css"
import AddToCartShowcase from '@/components/AddToCartShowcase'
import StripeCheckout from "react-stripe-checkout";
import {useSelector} from "react-redux";
import axios from 'axios'
import {useRouter} from "next/router"
import Link from 'next/link'
const AddtoCart = () => {
    const [userID,setuserID] = useState();
    const [token,setToken] = useState()
    const [fullData,setFullData] = useState();
   
    let finalPrice = ""
    const allPrice = [];
    const router = useRouter();
    // console.log("key",Key)

    console.log("my userID",userID)
    // console.log("allPrice",allPrice)

    // console.log(allPrice)
    // console.log("price",fullData && fullData?.data[1]?.Products[0].price)

     const getPost = async()=>{
        if(userID.length){
            let res = await axios.get(
                `${process.env.NEXT_PUBLIC_BAJE_URL}/api/cart/find/${userID && userID}`,{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                      }
                },{withCredentials:false}
              );
            //   console.log(res)
              setFullData(res)
        }
              
         
    }
    fullData != undefined && fullData.data.map((h,i)=>{
        // console.log("data",h.Products[0].price)
        allPrice.push(h.Products[0].price)
     })

     let j =0;
     allPrice.map((i)=>{
        j += i
        
        finalPrice = j
     })
    
    //  console.log("finalPrice",finalPrice)



         const AddQuantityToCart = async(id,quantity,price,productId)=>{
      
         // console.log("id",id)
             let res = await axios.put(
                `${process.env.NEXT_PUBLIC_BAJE_URL}/api/cart/edit/${id}`,{quantity:quantity,price:price,productId:productId},{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                    }
                },);
            console.log(res)
       
         location.reload();    
 }

    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setuserID(JSON.parse(sessionStorage?.getItem("userID") || null));
            setToken(JSON.parse(sessionStorage?.getItem("token") || null))   
        }
       
        },[typeof window !== 'undefined']);


    useEffect(()=>{
        if(typeof window !== 'undefined'){
        userID && getPost()
        // userID && myprice()
        }
        
        },[userID,typeof window !== 'undefined',token])
    

         
  return (
    <main className={styles.container}>
        <nav className={styles.navContainer}>
           <Navbar/>         
        </nav>
        <section className={styles.headingContainer}>
               {fullData?<h2 className={styles.heading} style={{color:"#111111"}}>YOUR CART</h2>:""}
            </section>
        <section className={styles.mainContainer}>
            
            <section className={styles.CardContainer}>
            
                  {fullData?(fullData.data.map((h,i)=>{
                    return (
                        <article key={i} className={styles.miniCardContainer}>
                            {/* {console.log("myPrice",h?.Products[i]?.Price)} */}
                        <AddToCartShowcase productID={h} token={token} userID={userID} AddQuantityToCart={AddQuantityToCart}/>
                        </article>
                    )
                    })):(<h className={styles.heading} style={{margin:"3rem auto auto auto",wordBreak:"breakWord"}}>IF you want to add product in your cart you have to login first </h>)
                  }
                   
               
               {/* <AddToCartShowcase/> */}
            </section>
            
            <section className={styles.TotalCardCotainer}>

           <div className={styles.TotalCardSemiCotainer}>
            <div className={styles.HeadTitleContainer}>
                <h3 className={styles.HeadTitle} style={{color:"#111111"}}>Cart Summary</h3>
            </div>

            <div className={styles.TotalInfoContainer}>
                <p className={styles.totalheading} style={{color:"#111111"}}>Total</p>
                <p className={styles.dollartitle} style={{wordBreak:"break-all",color:"#111111"}} >${finalPrice && finalPrice || 0}</p>
            </div>
            
            <div className={styles.checkoutBtnContainer}>

            
            <button className={styles.checkoutBtn} style={{color:"#111111"}}>CHECKOUT</button>
               
            </div>
           
           
           </div>
           
            </section> 


        </section>
        <footer className={styles.footerContainer}>
            <Footer/>
        </footer>
    </main>
  )
}

export default AddtoCart
