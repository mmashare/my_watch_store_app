import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import myimage from "../../../public/static/images/sneaker.jpg";
import Navbar from '@/components/navbar';
import Image from 'next/image';
import styles from "./singleProduct.module.css"
import { FaStar } from 'react-icons/fa';
import Showcase from '@/components/showcase';
import Footer from '@/components/footer';
import axios from 'axios';
import Link from 'next/link';



const SingleProductPage= () => {
    const [mydata,setMydata] = useState();
    const [recomandedPost,setrecomandedPost] = useState();
    const [userID,setUserID] = useState("")
    const [token,setToken] = useState("")
    const router = useRouter()
    // pID && console.log( "pID",pID ) 
        // console.log("id",mydata && mydata.data._id) 
        // console.log("addPRoductId",addPRoductId)
        
       
        // console.log("userID",userID)

    const getPost = async()=>{
        if(router.query.id){
            let res = await axios.get(
                `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product/find/${router.query.id}`
              );
              setMydata(res)
        }        
         
    }
        
    const RecomendedPost = async()=>{
                if(mydata && mydata.data.type){
                    let res = await axios.get(
                        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?category=${mydata && mydata.data.type}`
                    );
                    setrecomandedPost(res.data)
                }        
             
     }
     const VlaueInc = async ()=>{
        let res
            if(userID && userID.length){
             res = await axios.post(
                `${process.env.NEXT_PUBLIC_BAJE_URL}/api/cart/`,{
                    userID: userID,
                    Products:[{
                        productId:mydata.data._id || "",
                        quantity:"1",
                        price:mydata.data.price
                    }]
                },{
                    headers: {
                        'content-type': 'application/json',
                        'token': `Bearer,${token}`
                      }
                },
              )
            }
            //   setMydata(res)
            // console.log(res)
        // }      
        
     }
            
      useEffect(()=>{
        
           getPost()
          RecomendedPost()
        },[router.query.id,mydata && mydata.data.type])
        
        useEffect(() => {
            if (typeof window !== 'undefined') {
                setUserID(JSON.parse(sessionStorage?.getItem("userID") || "{}"))
                setToken(JSON.parse(sessionStorage?.getItem("token") || "{}"))
               
            }
            
            },[typeof window !== 'undefined']);
    
   
  return (
    <div className={styles.container}>
        {/* navbar section */}
        <div className={styles.navContainer}>
            <Navbar />
        </div>
        {/* main section */}
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <Image src={mydata && mydata.data.img} className={styles.img} height="500" width="500"></Image>
            </div>
            <div className={styles.ContentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title} style={{color: "#111111"}}>{mydata && mydata.data.name}</h2>
                </div>
                <div className={styles.CategoryContainer}>
                    <p className={styles.Categorytitle} style={{color: "#111111"}}>{mydata && mydata.data.type}</p>
                    <p className={styles.Categorystar}>{5}<FaStar/></p>
                    </div>
                <div className={styles.priceContainer}>
                    <h2 className={styles.pricetitle} style={{color: "#111111"}}>$ {mydata && mydata.data.price}</h2>
                    </div>
                <div className={styles.AddToContainerContainer}>
                    {userID === "undefined"? ( <button className={styles.AddTocartbtn} onClick={VlaueInc} disabled>Add To Cart</button>)
                    :(
                        <button className={styles.AddTocartbtn} onClick={VlaueInc}>Add To Cart</button>
                    )}
                </div>
                <div className={styles.DescriptionContainer}>
                    <p className={styles.description} style={{color: "#111111"}}>{mydata && mydata.data.desc}
                    </p>
                </div>
            </div>
        </div>
        {/* people also like section */}

        <div className={styles.similerProductContainer} style={{backgroundColor: "#f3f3f3"}}>
            <div className={styles.similerProductHeadingContainer}>
                <h3 className={styles.similerProductHeading} style={{color: "#111111",fontWeight:"600"}}><span className={styles.spanofSimilerproductHeading}>Other</span> Products</h3>
            </div>
            <div className={styles.similerProductsection}>
                {recomandedPost && recomandedPost.slice(0,4).map((h,i)=>{
                    return(
                        <div key={i} style={{display:"flex",flexDirection: "row",justifyContent:"space-around",
                    flexWrap:"wrap",height:"auto",marginBottom:"0px",padding:"0px",
                    width: "auto"}}>
                   <Link href={`/store/${h._id}`}><Showcase name={h.name} price={h.price} img={h.img}/></Link> 
                    </div>
                    )
                })}
            </div>
        </div>
        {/* footer section */}
        <div className={styles.FooterContainer}>
            <Footer/>
        </div>
    </div>
  )
}


export default SingleProductPage;