// App.tsx
import React, { useState, useEffect } from "react";
import { fetchProducts } from "./api";
import { Item } from "./types";

const App: React.FC = () => {
  const [products, setProducts] = useState<Item[]>([]);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="50"
              height="50"
            />
            <p>
              {product.title} - ${product.price}
            </p>
            <p>{product.description}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
