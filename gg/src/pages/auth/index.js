import React, { useEffect, useState } from 'react'
import styles from "./auth.module.css"
import Navbar from '@/components/navbar'
import Image from 'next/image'
import Myimg from "../../../public/static/images/watchWall.png"
import {loginStart,loginSuccess,loginFailure,logout,tokenSetter} from "../../redux/userData.js"
import {useDispatch,useSelector} from "react-redux";
import { useRouter } from 'next/router'
import axios from 'axios'
import {toggleChanger} from "..//../redux/authToggle.js"
const auth = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const [isToggle,setToggle] = useState(false);
    const [IsAlreadySignUp,setIsAlreadySignUp] = useState(false)
    const [nothaveAccount,setNothaveAccount] = useState(false)
    const [userID,setuserID] = useState()
    const [email,setEmail] = useState("");
    console.log(email)
    const [password,setPassword] = useState(""); 
    console.log(password)
    const [name,setName] = useState("");
    console.log(name)

    const myAuthToggle = useSelector((state)=>{
      return state.authToggle.myAuthToggle
    })
  
    console.log("myAuthToggle",myAuthToggle)


  const handleLogin = async (e)=>{
    dispatch(loginStart())
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BAJE_URL}/api/auth/login`,{email,password})
      // console.log("it come from func",res.data.userdata._id)
      dispatch(loginSuccess(res.data.userdata._id))
      dispatch(tokenSetter(res.data.access_token)) 
      console.log("Login",res.data,res.data.access_token)
      router.push("/");
      
       
    } catch (error) {
      dispatch(loginFailure())
      setNothaveAccount(true)
    }
   
  }

  const handleSignUp = async (e)=>{
   
    e.preventDefault();
    try {
      const string = "gmail.com"; 
      const substring = "oo";
      // console.log(email.includes(string));
      if(email.includes(string) && name.length > 2 && password.length > 4){

      const res = await axios.post(`${process.env.NEXT_PUBLIC_BAJE_URL}/api/auth/signup`,{name,email,password})
      // console.log("it come from func",res.data)
      setIsAlreadySignUp(true)

      }else{
        console.log("pls write @gmail.com in email section")
      }
    } catch (error) {
  
    console.log("something went wrong, please try again")
    }
   
  }
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setuserID(JSON.parse(sessionStorage?.getItem("userID") || "{}"));
          
  }
  if(userID){
    router.push("/")
  }
  
  },[typeof window !== 'undefined'])
  return (
    <div className={styles.container} style={{backgroundColor: "#ebebeb"}}>

        <div className={styles.Navbarcontainer}>
            <Navbar/>
        </div>


        <div className={styles.headingContainer}>
           <p className={styles.heading}>{isToggle?"SignUp":"SignIn"}</p>
            </div>

        <div className={styles.mainCOntainer}>{myAuthToggle?(
                // signup

                <div className={styles.Semicontainer}>

                <div className={styles.Imgcontainer}>
                        <Image src={Myimg} className={styles.Imgg}></Image>
                </div>
                <div className={styles.contentDiv}>
                <div className={styles.nameContainer}>
                    {IsAlreadySignUp?<p className={styles.Reminder}>*A user has been created. Now, please signin.</p>:""}
                    <form>
                    <input  className={styles.nameInput} placeholder="name(length must be 3 or more)" style={{backgroundColor:"#f3f3f3",color:"#0c0c0c"}} value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                    </form>
                </div>

                <div className={styles.emailContainer}>
                    <form>
                    <input  className={styles.emailInput} placeholder="email" value={email} style={{backgroundColor:"#f3f3f3",color:"#0c0c0c"}} type="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                    </form>
                </div>

                <div className={styles.passwordContainer}>
                    <form>
                    <input className={styles.passwordInput} placeholder="password(length must be 5 or more)" style={{backgroundColor:"#f3f3f3",color:"#0c0c0c"}} value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    </form>
                </div>

                <div className={styles.btnSection}>
                    <button onClick={()=>{setToggle(!isToggle);dispatch(toggleChanger(false))}} className={styles.ToggleBtn} style={{backgroundColor:"#f3f3f3",color:"#0c0c0c",cursor:"pointer"}}>SignIn</button>
                    {IsAlreadySignUp?<button className={styles.GoBtn} style={{color:"#0c0c0c"}} disabled >Go</button>:<button className={styles.GoBtn} style={{color:"#0c0c0c",cursor:"pointer"}} onClick={handleSignUp}>Go</button>}
                </div>
                </div>
                </div>

        ):(
            // Login
            <div className={styles.Semicontainer}>
                 <div className={styles.Imgcontainer}>
                        <Image src={Myimg} className={styles.Imgg}></Image>
                </div>
                <div className={styles.contentDiv}>
            <div className={styles.emailContainer}>
                { nothaveAccount?<p className={styles.Reminder}>*You don't have a account yet</p>:"" }
                <input className={styles.emailInput} placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{backgroundColor:"#f3f3f3",color:"#0c0c0c"}}/>
            </div>

            <div className={styles.passwordContainer}>
                {/* <p className={styles.password}>Password</p> */}
                <input className={styles.passwordInput} placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{backgroundColor:"#f3f3f3",color:"#0c0c0c"}}/>
            </div>

            <div className={styles.btnSection}>
                    <button onClick={()=>{setToggle(!isToggle);dispatch(toggleChanger(true))}} className={styles.ToggleBtn} style={{backgroundColor:"#f3f3f3",color:"#0c0c0c",cursor:"pointer"}}>SignUp</button>
                    <button className={styles.GoBtn} onClick={handleLogin} style={{color:"#0c0c0c",cursor:"pointer"}}>Go</button>
            </div>
            </div>
        </div>

        )}
        </div>
        
    
   
    </div>
  )
}

export default auth