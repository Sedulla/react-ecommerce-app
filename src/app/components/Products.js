import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Product } from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRODUCTS } from '../redux/actionTypes';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const baseURL = 'https://fakestoreapi.com/products?limit=3';

export const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) =>
        dispatch({ type: SET_PRODUCTS, payload: response.data })
      );
  }, [dispatch]);
  
  if (!products) return null;

  return (
    <Container>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </Container>
  );
};
