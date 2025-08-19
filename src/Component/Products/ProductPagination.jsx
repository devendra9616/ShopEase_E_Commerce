// Product.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Product.module.css';
import Pagination from '../Shop/Pagination';
import { useNavigate } from 'react-router-dom';

const ProductPagination = () => {
  const navigate=useNavigate()

  const allProducts = [...Array(8)].map((_, i) => ({
    id: i + 1,
    img: `/img/products/f${i + 1}.jpg`,
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
  }));

  const HandleOnClick=()=>{
    navigate("/Sproduct")
  }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section id={styles.product1} className={styles["section-p1"]}>
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className={styles["pro-container"]} onClick={HandleOnClick}>
          {currentProducts.map((product) => (
            <div key={product.id} className={styles.pro}>
              <img src={product.img} alt="" />
              <div className={styles.des}>
                <span>{product.brand}</span>
                <h5>{product.title}</h5>
                <div>
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className={`${styles["fas"]} ${styles["fa-star"]}`}></i>
                  ))}
                </div>
                <h4>${product.price}</h4>
              </div>
              <a href="#">
                <FontAwesomeIcon className={styles.cart} icon={faCartShopping} />
              </a>
            </div>
          ))}
        </div>
        <Pagination
          totalItems={allProducts.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </>
  );
};

export default ProductPagination;

