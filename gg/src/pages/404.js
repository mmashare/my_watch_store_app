import Navbar from '@/components/navbar'
import React from 'react'
import styles from "./errorPage.module.css"
const ErrorPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.navContainer}>
            <Navbar/>
        </div>
        <div className={styles.ContentSection}>
            <h1 className={styles.Content1}>404</h1>
            <h1 className={styles.Content2}>Not Found!</h1>
        </div>
    </div>
  )
}

export default ErrorPage