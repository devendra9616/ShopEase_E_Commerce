import React from 'react'
import styles from './Feature.module.css'

const Feature = () => {
  return (
    <>
      <section id={styles.feature} className={styles["section-p1"]}>
        {["f1", "f2", "f3", "f4", "f5", "f6"].map((f, i) => (
          <div key={i} className={styles["fe-box"]}>
            <img src={`/img/features/${f}.png`} alt="" />
            <h6>{["Free Shipping", "Online Order", "Save Money", "Promotions", "Happy Sell", "Support"][i]}</h6>
          </div>
        ))}
      </section>
    </>
  )
}

export default Feature
