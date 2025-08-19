import React from 'react'

const Feature = () => {
  return (
    <>
      <section id="feature" className="section-p1">
        {["f1", "f2", "f3", "f4", "f5", "f6"].map((f, i) => (
          <div key={i} className="fe-box">
            <img src={`../assets/img/features/${f}.png`} alt="" />
            <h6>{["Free Shipping", "Online Order", "Save Money", "Promotions", "Happy Sell", "Support"][i]}</h6>
          </div>
        ))}
      </section>
    </>
  )
}

export default Feature
