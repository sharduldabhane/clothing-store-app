import React from "react";
import { Item } from "../types";
import styles from "./ProductDetail.module.css"; // Ensure you have a corresponding CSS module

interface ProductDetailProps {
  product: Item | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return (
      <div className={styles.productDetailPlaceholder}>
        Select an item to display
      </div>
    );
  }

  return (
    <div className={styles.productDetailContainer}>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <p className={styles.productPrice}>
        {product.title} - ${product.price}
      </p>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productRating}>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
};

export default ProductDetail;
