// ProductList.tsx
import React from "react";
import { Item } from "../types";
import styles from "./ProductList.module.css"; // Assuming your styles are defined here

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
  currentPage, // Ensuring currentPage is passed down from props
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.productListContainer}>
      {" "}
      {/* Updated class name for scrolling */}
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.productItem}
          onClick={() => onProductClick(product)}
        >
          <div className={styles.productImageContainer}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.productRating}>
              <span>{product.rating.rate}</span>
              <span>({product.rating.count} reviews)</span>
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productCategory}>{product.category}</div>
            <div className={styles.productTitle}>{product.title}</div>
            <div className={styles.productDescription}>
              {product.description}
            </div>
            <div className={styles.productPrice}>${product.price}</div>
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
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
