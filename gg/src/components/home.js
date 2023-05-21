import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image';
import headerImage from "../../public/static/images/sneaker.jpg"
import Link from 'next/link';
const HomeComponent = () => {
  return (
    <div className={styles.container}>
       
            <div className={styles.textContainer}>
                <h2 className={styles.heading1}>A NEW</h2>
                <h2 className={styles.heading2}>PERSPECTIVE</h2>
                <h2 className={styles.heading3}>OF TIME.</h2>
              <Link href="/store"><button className={styles.btnShop}>SHOP</button></Link>
            </div>
            <div className={styles.imgContainer}>
            {/* <Image src={headerImage} className={styles.headerImagess}></Image> */}
            </div>
        
    </div>
  )
}

export default HomeComponent;