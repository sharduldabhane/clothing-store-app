// ...imports
import React from "react";
import { Item } from "../types";

interface ProductListProps {
  products: Item[];
  onProductClick: (product: Item) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductClick,
}) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-item"
          onClick={() => onProductClick(product)}
        >
          <img src={product.image} alt={product.title} width="50" height="50" />
          <div>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
