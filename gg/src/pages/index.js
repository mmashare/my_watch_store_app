import Navbar from "../components/navbar.js"
import styles from "./index.module.css"
import HomeComponent from "../components/home.js";
import Showcase from "../components/showcase.js";
import axios from "axios";
import { BsArrowUpRight } from 'react-icons/bs'; // up arraow
import {BsArrowRightShort} from 'react-icons/bs'; // straight arrow
import rolexImg from "../../public/static/images/watchrolex.jpg";
import Image from "next/image.js";
import Footer from "@/components/footer.js";
import Link from "next/link.js";
export default function Home({smartWatch,expensiveWatch}) {
  console.log(smartWatch)
  // console.log("---------------------------------------------------------------")
  console.log(expensiveWatch)
  console.log("BAJE_URL",process.env.NEXT_PUBLIC_BAJE_URL)
  return (
   <main className={styles.container}>
    <nav className={styles.Navbarcontainer}>
    <Navbar />
    </nav>

    <section className={styles.homePageContainer}>
      {/* homepage design */}
      <HomeComponent/>
    </section>

  <article className={styles.smartwatchWrapper}>
    {/* smart watches */}
    <div className={styles.headingDiv}>
      <p className={styles.headingOfSmartWatch}><span className={styles.spanOfSmart}>SMART</span> WATCHES</p>
    </div>
    
    <figure className={styles.showCaseContainer}>
    {smartWatch && smartWatch.slice(0,3).map((h,i)=>{
      return (<div key={i} style={{display:"flex",justifyContent:"space-around"}}>
        <Link href={`/store/${h._id}`}> <Showcase name={h.name} price={h.price} img={h.img}/> </Link>
      </div>)
      })
    }
    </figure>
  </article>

    <article className={styles.highpriceWrapper}>
      {/* high price watches */}

      <div className={styles.headingDivOfExp}>
      <p className={styles.headingOfExpensive}>EXPENSIVE</p>
      <p className={styles.spanOfexp}>WATCHES</p>
    </div>

    <figure className={styles.expensiveWContainer}>
    {expensiveWatch && expensiveWatch.slice(0,3).map((h,i)=>{
      return (<div key={i} style={{display:"flex",justifyContent:"space-around"}}>
       <Link href={`/store/${h._id}`}> <Showcase name={h.name} price={h.price} img={h.img}/> </Link>
      </div>)
      })
    }
    </figure>
    </article>

    <section className={styles.shopebybrandSection}>
      {/* shop by brand */}
      <Link href="/store"><div className={styles.headLineContainer}>
        <p className={styles.headLine}>BRANDS</p>
        </div></Link>
        <Link href="/store"><div className={styles.Brand1Container}>
        <p className={styles.Brand1}>ROLEX</p>
      <BsArrowUpRight className={styles.arrow1}/>
        </div></Link>
        <Link href="/store"><div className={styles.Breand2Container}>
        <p className={styles.Breand2}>RICHARD-MILLE</p>
        <BsArrowUpRight className={styles.arrow2}/>
        </div></Link>
        <Link href="/store"><div className={styles.Brand3Container}>
        <p className={styles.Brand3}>GARMIN</p>
        <BsArrowUpRight className={styles.arrow3}/>
        </div></Link>
        <Link href="/store"><div className={styles.Brand4Container}>
        <p className={styles.Brand4}>HUBLOT</p>
        <BsArrowUpRight className={styles.arrow4}/>
        </div></Link>

    </section>

    <section className={styles.signupSection}>
      {/* sign up page promotion */}
      <div className={styles.imgContainer}>
     {/* <Image src={rolexImg} className={styles.imageTag}></Image> */}
      </div>
      <div className={styles.ContentContainer}>
        <p className={styles.heading1}>GET THE LATEST PRODUCT FROM HERE</p>
        <Link href="/auth"><p className={styles.heading2}>GO TO SIGNUP PAGE <BsArrowRightShort className={styles.arrowTowardRight}/></p></Link>
       
      </div>
    </section>

    <footer className={styles.footerSection}>
      {/* footer  */}
      <Footer/>
    </footer>
   </main>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external data source
//   const res = await axios(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }


export async function getServerSideProps(){
  
    try {
      // let res = await axios.get(
      //   "http://localhost:8800/api/product?category=smart-watches"
      // );

      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?category=smart-watches`,{withCredentials:true}
      );
      let res2 = await axios.get(
        `${process.env.NEXT_PUBLIC_BAJE_URL}/api/product?gtprice=20000&ltprice=8000000`,{withCredentials:true}
      );
       
      return {
        props: {
          smartWatch: res.data,
          expensiveWatch: res2.data,
        },
      };

    } catch (error) {
      return {
        props: {
          smartWatch: {message : `${error}`},
          expensiveWatch: {message : `${error}`},
        },
      };
    }
    
 
}