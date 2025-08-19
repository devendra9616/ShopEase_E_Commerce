// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
// import { faRightLong } from '@fortawesome/free-solid-svg-icons';

// const Pagination = () => {
//  const [currentPage,setCurrentPage]=useState(1);
//  const itemsPerPage=4;
 
//   return (
//     <>
//       <section id="pagination" className="section-p1 pagination">
//         <a href="#" id="prev"><FontAwesomeIcon icon={faLeftLong} /></a>
//         <a href="#" className="page-link" data-page="1">1</a>
//         <a href="#" className="page-link" data-page="2">2</a>
//         <a href="#" className="page-link" data-page="3">3</a>
//         <a href="#" className="page-link" data-page="4">4</a>
//         <a href="#" id="next"><FontAwesomeIcon icon={faRightLong} /></a>
//        {/* <p id="page-numbers"> </p>  */}
//        </section>
//     </>
//   )
// }

// export default Pagination




// Pagination.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <section id="pagination" className="section-p1 pagination" style={{ textAlign: 'center', marginTop: '20px' }}>
      <a href="#" id="prev" onClick={handlePrev}>
        <FontAwesomeIcon icon={faLeftLong} />
      </a>

      {Array.from({ length: totalPages }, (_, i) => (
        <a
          href="#"
          key={i}
          className={`page-link ${currentPage === i + 1 ? 'active' : ''}`}
          style={{
            margin: '0 5px',
            textDecoration: 'none',
            fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
          }}
          onClick={(e) => {
            e.preventDefault();
            onPageChange(i + 1);
          }}
        >
          {i + 1}
        </a>
      ))}

      <a href="#" id="next" onClick={handleNext}>
        <FontAwesomeIcon icon={faRightLong} />
      </a>
    </section>
  );
};

export default Pagination;
