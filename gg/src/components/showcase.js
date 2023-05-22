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
            <Image src={img} className={styles.img} height="500" width="500"></Image>
            {/* <Image src={Imagess} className={styles.img} ></Image> */}
        </div>
        <div className={styles.detailContainer}>
        <p className={styles.name}>{excerpt(name)}</p>
        <p className={styles.price}>${price}</p>
        </div>
    </section>
  )
}

export default Showcase;