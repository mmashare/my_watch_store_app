import React from 'react'

const ExpensiveWatches = () => {
  return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={Imagess} className={styles.img}></Image>
            </div>
            <div className={styles.detailContainer}>
            <button className={styles.btnShop}>SHOP</button>
            </div>
        </div>
      
  )
}

export default ExpensiveWatches;