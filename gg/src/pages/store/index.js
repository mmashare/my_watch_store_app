import React, { useEffect, useState } from 'react'
import styles from "./store.module.css"
import Navbar from "../../components/navbar.js"
import Filterpanel from '@/components/filterpanel'
import Showcase from '@/components/showcase'
import {useSelector} from "react-redux"
import axios from 'axios'
import Link from "next/link.js";
export async function getServerSideProps(){
    try {
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product`
      );
       
      return {
        props: {
          alldata: res.data,
          
        },
      };

    } catch (error) {
      return {
        props: {
          alldata: `${error}`,
        },
      };
    }
    
 
}

const Store = ({alldata}) => {
  
  const {price1,price2,price3,men,women,smartWatch,patekPhilippe,rolex,audemarsPiguet,
    hublot,zenith,omega,Breitling,richardMille,garmin} = useSelector((state)=>{
    return state.product
  })
  const [myproduct,setMyproduct] = useState(alldata);
  // console.log("myproduct",myproduct)

  async function productSelector(){

    if(price1 === true){
      // console.log("first")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?gtprice=100&ltprice=1000`
      );
      setMyproduct(res.data)
    }else if(price2 === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?gtprice=1100&ltprice=100000`
      );
      setMyproduct(res.data)
    }else if(price3 === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?gtprice=110000&ltprice=1000000000`
      );
      setMyproduct(res.data)
    }else if(men === true){
      // console.log("third")
      
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?category=man`
      );
      setMyproduct(res.data)
    }else if(women === true){
      // console.log("fourth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?category=women`
      );
      setMyproduct(res.data)
    }else if(smartWatch === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?category=smart-watches`
      );
      setMyproduct(res.data)
    }else if(patekPhilippe === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Patek-Philippe`
      );
      setMyproduct(res.data)
    }else if(rolex === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Rolex`
      );
      setMyproduct(res.data)
    }else if(audemarsPiguet === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Audemars-Piguet`
      );
      setMyproduct(res.data)
    }else if(hublot === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Hublot`
      );
      setMyproduct(res.data)
    }else if(zenith === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Zenith`
      );
      setMyproduct(res.data)
    }else if(omega === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Omega`
      );
      setMyproduct(res.data)
    }else if(Breitling === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Breitling`
      );
      setMyproduct(res.data)
    }else if(richardMille === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=Richard-Mille`
      );
      setMyproduct(res.data)
    }else if(garmin === true){
      // console.log("fifth")
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?Brand=GARMIN-VIVOACTIVE`
      )
      setMyproduct(res.data)
    }else{
      // console.log("sixth")
      setMyproduct(myproduct);
    }
  }


    useEffect(()=>{
      productSelector();
    },[price1,price2,price3,men,women,smartWatch,patekPhilippe,rolex,audemarsPiguet,
      hublot,zenith,omega,Breitling,richardMille,garmin])
  
  // console.log("price1",price1)
  // console.log("price2",price2)
  // console.log("price3",price3)
  // console.log("men",men)
  // console.log("women",women)
  // console.log("smartWatch",smartWatch)
  // console.log("patekPhilippe",patekPhilippe)
  // console.log("rolex",rolex)
  // console.log("audemarsPiguet",audemarsPiguet)
  // console.log("hublot",hublot)
  // console.log("zenith",zenith)

  
  return (
    <main className={styles.container}>
        <div className={styles.navbarContainer}><Navbar/></div>
        <div className={styles.mainContentContainer}>
             <div className={styles.sidebarContainer}>
            <Filterpanel />
            </div> 
             <div className={styles.StoreContainer}>
              { myproduct.length && myproduct.map((h,i)=>{
                    return (<div key={i} style={{display:"flex",flexDirection: "row",justifyContent:"space-around",
                    flexWrap:"wrap",height:"auto",marginBottom:"0px",padding:"0px",
                    width: "auto"}}>
                   <Link href={`/store/${h._id}`}><Showcase name={h.name} price={h.price} img={h.img}/></Link> 
                    </div>)
                    })
                  }
              
              
            </div> 
        </div>
    </main>
  )
}

export default Store;