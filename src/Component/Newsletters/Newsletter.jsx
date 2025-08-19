import React from 'react'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <>
      <section id={styles.newsletter} className={`${styles["section-p1"]} ${styles["section-m1"]}`}>
        <div className={styles.newstext}>
          <h4>Sign Up For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers</span>.</p>
        </div>
        <div className={styles.form}>
          <input type='text' placeholder="Your email address" />
          <button className={styles.normal}>Sign Up</button>
        </div>
      </section>
    </>
  )
}

export default Newsletter
