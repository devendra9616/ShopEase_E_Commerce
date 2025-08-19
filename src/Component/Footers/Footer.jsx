import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles["section-p1"]}>
        <div className={styles.col}>
          <img className="logo" src="/img/logo.png" alt="" />
          <h4>Contact</h4>
          <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
          <p><strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
        </div>
        <div className={styles.col}>
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={styles.col}>
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className={`${styles.col} ${styles.install}`}>
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className={styles.row}>
            <img src="/img/pay/app.jpg" alt="" />
            <img src="/img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="/img/pay/pay.png" alt="" />
        </div>
      </footer>
    </>
  )
}

export default Footer
