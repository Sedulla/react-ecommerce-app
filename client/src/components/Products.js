import styled from 'styled-components';
import { Product } from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { mobile } from '../utils/responsive';
import { nanoid } from '@reduxjs/toolkit';

const Container = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  ${mobile({ gridTemplateColumns: 'auto' })}
`;

export const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get all products from the database and set them to the state
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  // Filter products by the filters
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  // Sort products by the sort
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );

      // Sort by price
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((product) => (
            <Product key={nanoid()} product={product} />
          ))
        : products
            .slice(0, 3)
            .map((product) => <Product key={nanoid()} product={product} />)}
    </Container>
  );
};
