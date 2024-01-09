// ProductList.tsx
import React from "react";
import { Item } from "../types";
import styles from "./ProductList.module.css"; // Ensure this points to your CSS module file

interface ProductListProps {
  products: Item[];
  onProductClick: (product: Item) => void;
  paginate: (pageNumber: number) => void;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductClick,
  paginate,
  totalItems,
  itemsPerPage,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.productListContainer}>
      {" "}
      {/* Class name for scrolling container */}
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.productCard} // Updated class name for product cards
          onClick={() => onProductClick(product)}
        >
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage} // Class that ensures proper image sizing
          />
          <div className={styles.productDetails}>
            {" "}
            {/* Updated class name for product details */}
            <div className={styles.productCategory}>{product.category}</div>
            <div className={styles.productTitle}>{product.title}</div>
            <div className={styles.productDescription}>
              {product.description}
            </div>
            <div className={styles.productPrice}>${product.price}</div>
            <div className={styles.productRating}>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </div>
          </div>
        </div>
      ))}
      <div className={styles.pagination}>
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`${styles.pageNumber} ${
              currentPage === i + 1 ? styles.active : ""
            }`} // Class for page numbers, with active state
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
