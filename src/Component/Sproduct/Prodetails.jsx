import React from 'react'

const Prodetails = () => {
  return (
    <section id="prodetails" class="section-p1">
            <div class="single-pro-image">
                <img src="img/products/f1.jpg" width="100%" id="MainImg" alt="" />
                <div class="small-img-group">
                    <div class="small-img-col">
                        <img src="img/products/f1.jpg" width="100%" class="small-img" alt="" />
                    </div>
                    <div class="small-img-col">
                        <img src="img/products/f2.jpg" width="100%" class="small-img" alt="" />
                    </div>
                    <div class="small-img-col">
                        <img src="img/products/f3.jpg" width="100%" class="small-img" alt="" />
                    </div>
                    <div class="small-img-col">
                        <img src="img/products/f4.jpg" width="100%" class="small-img" alt="" />
                    </div>
                </div>
            </div>

            <div class="single-pro-details">
                <h6>Home / T-Shirt</h6>
                <h4>Men's Fashion T Shirt</h4>
                <h2>$139.00</h2>
                <select>
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <input type="number" value="1" />
                <button class="normal">Add To Card</button>
                <h4>Product Details</h4>
                <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double coller, and available in a range of colors,it offers it all in the ultimate head-turning package.</span>
            </div>
        </section>
  )
}

export default Prodetails
