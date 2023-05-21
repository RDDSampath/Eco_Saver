import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../home/header';
import Footer from '../home/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';

const ProductHome = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8070/product/allproducts');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-center mb-4">Product Home</h1>
      <div className="container mt-4">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card-container">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductHome;