import React from "react";
import { Item } from "../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Item[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
