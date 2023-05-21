import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.copyrightSection}>
            <p>Copyright © 2023 Watches Inc. All rights reserved.</p>
        </div>
        <div className={styles.optionSection}>
            <p className={styles.option1}>Privacy Policy</p>
            <p className={styles.option2}>Terms of Use</p>
            <p className={styles.option3}>Sales and Refunds</p>
            <p className={styles.option4}>Legal</p>
        </div>
    </div>
  )
}

export default Footer;