import React, { useState,useEffect } from 'react'
import styles from "./navbar.module.css"
import Logo from "../../public/static/images/logo.png";
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux"
import {toggleChanger} from "../redux/authToggle"
import {MyByNavMen,MyByNavSmartWatch,MyByNavWomen} from "../redux/filterValue"
const Navbar = () => {
  const [toogle,setToogle] = useState(false);
  const [isUserId,setISUserId] = useState("") 
  // console.log("isUserId",isUserId)
  const dispatch = useDispatch()
  const myAuthToggle = useSelector((state)=>{
    return state.authToggle.myAuthToggle
  })

  const ByNavWomen = useSelector((state)=>{
    return state.product.ByNavWomen
  })

   console.log("ByNavWomen",ByNavWomen)
  const ByNavMen = useSelector((state)=>{
    return state.product.ByNavMen
  })
  console.log("ByNavMen",ByNavMen)
  const ByNavSmartWatch = useSelector((state)=>{
    return state.product.ByNavSmartWatch
  })
  console.log("ByNavSmartWatch",ByNavSmartWatch)

  useEffect(() => {
  if (typeof window !== 'undefined') {
    setISUserId(JSON.parse(sessionStorage?.getItem("userID") || "{}"));    
  }
  },[typeof window !== 'undefined']);

  const idRemover = async ()=>{
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(
        "userID",
        JSON.stringify(null)
      );
     
    }
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BAJE_URL}/api/auth/logout`)
      console.log("it come from func",res.data)
      location.reload();
  }
  
  return (
    <section className={toogle?styles.toogleContainer:styles.container}>
    <div className={styles.upperdiv}>
    </div>

    
    <div className={styles.mainNavbarSection}>

    <section className={styles.hamburgerContainer}>
      <RxHamburgerMenu className={styles.hamburgerIcon}  onClick={()=>{
      setToogle(!toogle)
    }}/>
    </section>

    <figure className={styles.logoSection}>
    <Link href="/"><Image src={Logo} className={styles.imgss}></Image></Link>
    </figure>
    
    <div className={styles.optionSection}>
     
      <section className={styles.semiOptionSection}>
      <Link href="/" ><p className={styles.homeSection}>Home</p></Link>
      <Link href="/store" ><p className={styles.WomenSection} onClick={()=>{dispatch(MyByNavWomen(true))}}>Store</p></Link>
      </section>

      
    </div>

      {isUserId && isUserId.length > 2 ?(
        <section className={styles.iconSection}>
          <button className={styles.loginbtn} onClick={idRemover}>Logout</button>
        {/* <HiOutlineUserCircle className={styles.icons2}/> */}
       {/* <RiShoppingBasketLine className={styles.icons3} /> */}
       <Link href="/addtocart"><button className={styles.loginbtn} >Cart</button></Link>
        </section>
      ):(
        <section className={styles.iconSection}>
        <Link href="/auth"><button className={styles.loginbtn} onClick={()=>{dispatch(toggleChanger(false))}}>Login</button></Link>
        <Link href="/auth"><button className={styles.signupbtn} onClick={()=>{dispatch(toggleChanger(true))}}>Signup</button></Link>
          </section>
      )}
      
      
    <section className={styles.langSection}>
      <p className={styles.langUS}>US</p>
      <p className={styles.langEn}>EN</p>
    </section>
    </div>
    {toogle?
        (
            <section className={styles.TooglesemiOptionSection}>
          <Link href="/" className={styles.TooglehomeSection}> Home</Link>
           <Link href="/store" className={styles.ToogleWomenSection} onClick={()=>{dispatch(MyByNavWomen(true))}}>Store</Link>
           {/* <Link href="/store" className={styles.ToogleMenSection} onClick={()=>{dispatch(MyByNavMen(true))}}>Men</Link>
           <Link href="/store" className={styles.TooglesmartWatchSection} onClick={()=>{dispatch(MyByNavSmartWatch(true))}}>Smart Watch</Link> */}
          </section>
        )
      :
        ""}
    </section>
  )
}

export default Navbar

