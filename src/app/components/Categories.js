import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CategoryItem } from './CategoryItem';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 23px;
`;

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  // fetching products from api
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=3').then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) return null;

  return (
    <Container>
      {categories &&
        categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
    </Container>
  );
};
