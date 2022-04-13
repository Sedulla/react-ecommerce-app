import { Link } from 'react-router-dom';
import {
  MdOutlineFavoriteBorder as FavoriteBorderIcon,
  MdOutlineSearch as SearchIcon,
  MdOutlineShoppingCart as ShoppingCartIcon,
} from 'react-icons/md';
import styled from 'styled-components';

const Info = styled.div`
  opacity: 0;
  width: 419px;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 270px;
  height: 350px;
  margin: 5px;
  background-color: #f5fbfd;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 35vh;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <Link className="link" to={`/product/${product._id}`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};
