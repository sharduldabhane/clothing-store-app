import React from "react";
import { Item } from "../types";

interface ProductDetailProps {
  product: Item | null; // product is nullable, because there might be no selection
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <div>Select an item to display</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>
        {product.title} - ${product.price}
      </p>
      <p>{product.description}</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
};

export default ProductDetail;
