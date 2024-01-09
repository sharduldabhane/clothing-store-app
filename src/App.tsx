// App.tsx
import React, { useState, useEffect } from "react";
import { fetchProducts } from "./api";
import { Item } from "./types";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import "./App.css"; // Ensure you import App.css here

const ITEMS_PER_PAGE = 5; // Adjust the number of items per page as needed

const App: React.FC = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (e) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handleProductClick = (product: Item) => {
    setSelectedProduct(product);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="app-container">
      <div className="product-list-container">
        <ProductList
          products={currentItems}
          onProductClick={handleProductClick}
          paginate={paginate}
          totalItems={products.length}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
        />
      </div>
      <div className="product-detail-container">
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} />
        ) : (
          <div className="no-selection-container">
            <p className="no-selection-header">Nothing to display...</p>
            <p className="no-selection-important">Select an Item to display</p>
            <p className="no-selection-text">
              Select an item from the master view to display details in the
              detail view.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
