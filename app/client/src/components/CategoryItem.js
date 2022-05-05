import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';

const Container = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  flex: 1;
  height: 70vh;
  margin: 3px;
`;

const Image = styled.img`
  height: 55vh;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 30vw;
  height: 70vh;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 15px;
`;

const ShopButton = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  background: #fff;
  color: #000;
  border: none;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
    transition: 0.3s;
  }
`;

export const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`/products/${category.cat}`}>
        <Image src={category.image} />
        <Info>
          <Title>{category.title}</Title>
          <ShopButton>SHOP NOW</ShopButton>
        </Info>
      </Link>
    </Container>
  );
};
