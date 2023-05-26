import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from './showcase.module.css';
import Imagess from "../../public/static/images/sneaker.jpg"
const Showcase = ({img,name,price}) => {

      const excerpt = (str) => {
        if (str && str.length > 30) {
          str = str.substring(0, 12) + "... ";
        }
        return str;
      };

  return (

    <section className={styles.container}>
        <div className={styles.imgContainer}>
           {img?<Image src={img} className={styles.img} height="500" width="500"></Image>:<div className={styles.skeletonImage}></div>} 
            {/* <Image src={Imagess} className={styles.img} ></Image> */}
        </div>
        <div className={styles.detailContainer}>
       {name?<p className={styles.name}>{excerpt(name)}</p>:<div className={styles.skeletonDescription}></div>}
        {price?<p className={styles.price}>${price}</p>:<div className={styles.skeletonDescription}></div>}
        </div>
    </section>
  )
}

export default Showcase;