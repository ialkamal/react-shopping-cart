import React, { useContext } from "react";

// Components
import Product from "./Product";

import { ProductContext } from "../contexts/ProductContext";

const Products = () => {
  const value = useContext(ProductContext);
  return (
    <div className="products-container">
      {value.products.map((product) => (
        <Product key={product.id} product={product} addItem={value.addItem} />
      ))}
    </div>
  );
};

export default Products;
