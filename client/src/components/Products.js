import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const baseURL = 'https://fakestoreapi.com/products?limit=3';

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => setProducts(response.data));
  }, []);
  if (!products) return null;

  return (
    <Container>
      {products && products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
