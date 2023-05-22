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
const Navbar = () => {
  const [toogle,setToogle] = useState(false);
  const [isUserId,setISUserId] = useState("") 
  // console.log("isUserId",isUserId)
  const dispatch = useDispatch()
  const myAuthToggle = useSelector((state)=>{
    return state.authToggle.myAuthToggle
  })

  // console.log("myAuthToggle",myAuthToggle)

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
    <main className={toogle?styles.toogleContainer:styles.container}>
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
      <Link href="/"> <p className={styles.homeSection}>Home</p></Link>
      <Link href="/store"><p className={styles.WomenSection}>Women</p></Link>
      <Link href="/store"><p className={styles.MenSection}>Men</p></Link>
      <Link href="/store"><p className={styles.smartWatchSection}>Smart Watch</p></Link>
      </section>

      <div className={styles.semiInputSection}>
      <BiSearch className={styles.SearchIcon}/>
        {/* <p className={styles.SearchIcon}><BiSearch className={styles.SearchIcon}/></p> */}
        <input className={styles.inputt}placeholder="Search"/>
      </div>
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
           <Link href="/store" className={styles.ToogleWomenSection} >Women</Link>
           <Link href="/store" className={styles.ToogleMenSection}>Men</Link>
           <Link href="/store" className={styles.TooglesmartWatchSection}>Smart Watch</Link>
          </section>
        )
      :
        ""}
    </main>
  )
}

export default Navbar