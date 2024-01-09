import React from "react";
import { Item } from "../types";

interface ProductItemProps {
  product: Item;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li>
      <img src={product.image} alt={product.title} width="50" height="50" />
      <p>
        {product.title} - ${product.price}
      </p>
      <p>{product.description}</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </li>
  );
};

export default ProductItem;
