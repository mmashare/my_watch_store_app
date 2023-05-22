import React from 'react'

const ExpensiveWatches = () => {
  return (
        <section className={styles.container}>
            <figure className={styles.imgContainer}>
                <Image src={Imagess} className={styles.img}></Image>
            </figure>
            <div className={styles.detailContainer}>
            <button className={styles.btnShop}>SHOP</button>
            </div>
        </section>
      
  )
}

export default ExpensiveWatches;