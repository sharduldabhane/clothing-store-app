import React, { useState, useEffect } from "react";
import { fetchProducts } from "./api";
import { Item } from "./types";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Loading from "./components/Loading";
import Error from "./components/Error";

const App: React.FC = () => {
  const [products, setProducts] = useState<Item[]>([]);
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

  const handleProductClick = (product: Item) => {
    setSelectedProduct(product);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="app-container">
      <div className="product-list-container">
        <ProductList products={products} onProductClick={handleProductClick} />
      </div>
      <div className="product-detail-container">
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} />
        ) : (
          <div>Select an item to display</div>
        )}
      </div>
    </div>
  );
};

export default App;
