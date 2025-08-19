import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Product.module.css'

const Product = () => {
  return (
    <>
     <section id={styles.product1} className={styles["section-p1"]}>
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className={styles["pro-container"]}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.pro}>
              <img src={`/img/products/f${i + 1}.jpg`} alt="" />
              <div className={styles.des}>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div>{[...Array(5)].map((_, j) => <i key={j} className={`${styles["fas"]} ${styles["fa-star"]}`}></i>)}</div>
                <h4>$78</h4>
              </div>
              <a href="#">
                <FontAwesomeIcon className={styles.cart} icon={faCartShopping} />
              </a>
            </div>
          ))}
        </div>
      </section>      
    </>
  )
}

export default Product
