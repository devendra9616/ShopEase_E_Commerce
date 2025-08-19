import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CardP = () => {
  return (
    <section id="card" className="section-p1">
      <table>
        <thead>
          <tr>
            <td>REMOVE</td>
            <td>IMAGE</td>
            <td>PRODUCT</td>
            <td>PRICE</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
              </a>
            </td>
            <td>
              <img src="/img/products/f1.jpg" alt="Product" />
            </td>
            <td>Cartoon Astronaut T-Shirts</td>
            <td>$118.19</td>
            <td>
              <input type="number" />
            </td>
            <td>$118.19</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CardP;
