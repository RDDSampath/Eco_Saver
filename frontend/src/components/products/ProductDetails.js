import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailedProductCard from './DetailedProductCard';
import Header from '../home/header';
import Footer from '../home/footer';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8070/product/get/${id}`);
        const data = await response.json();
        console.log('Product data:', data);
        setProduct(data.foundProduct); // Update this line
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const containerStyle = {
    display: 'flex',
  flexDirection: 'column',
  
  alignItems: 'center',
  height: 'auto', 
  marginTop: '50px',
  marginBottom: '50px',
  };
  

  return (
    <div >
        <Header/>
        <div style={containerStyle}>
      
        <div style={{ width: '60%', height: '70%' }}>
        {/* Pass the product data to the DetailedImgMediaCard component */}
        {product && <DetailedProductCard product={product} />}
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;