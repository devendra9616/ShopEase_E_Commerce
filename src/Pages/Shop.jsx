import React from "react";
import Header from "../Component/Headers/Header";
import Newsletter from "../Component/Newsletters/Newsletter";
import Footer from "../Component/Footers/Footer";
import PageHeader from "../Component/Shop/PageHeader";
import ProductPagination from "../Component/Products/ProductPagination";

const Shop = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <ProductPagination />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Shop;
