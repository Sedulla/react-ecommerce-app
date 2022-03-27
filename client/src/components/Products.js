import styled from 'styled-components';
import { Product } from './Product';
import { products } from '../utils/data';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </Container>
  );
};
