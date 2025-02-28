// ProductGallery.js
import React, { useState } from "react";
import "./styles.css";

const initialProducts = [
  { id: 1, name: "Miniso College Bag", description: "College cool bags", price: "₹1000", image: "bag1.jpg" },
  { id: 2, name: "Harry College Bag", description: "Comfy bags with huge space", price: "₹2000", image: "bag2.jpg" },
  { id: 3, name: "Nike Backpack", description: "Stylish and durable", price: "₹2500", image: "bag3.jpg" }
];

const ProductGallery = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      description: `Description ${products.length + 1}`,
      price: `₹${(products.length + 1) * 1000}`,
      image: `bag${(products.length % 3) + 1}.jpg`
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <h1>Product Gallery</h1>
      <div className="actions">
        <button onClick={addProduct}>Add Product</button>
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid">
        {products
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductGallery;
