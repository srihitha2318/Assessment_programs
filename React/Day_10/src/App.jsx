import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: i + 10
}));

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  /* ---------------- useMemo ---------------- */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  /* ---------------- useCallback ---------------- */
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  console.log("App rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
