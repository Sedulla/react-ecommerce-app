import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

import { MdAdd as AddIcon, MdRemove as RemoveIcon } from 'react-icons/md';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  ${mobile({
    margin: '0',
    marginBottom: '19px',
  })}
`;

const Image = styled.img`
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '11px' })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50vw;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '90vw' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 25px;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '90vw' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
    transition: 0.3s;
  }
`;

export const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/products/find/${productId}`
        );
        console.log(response);
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleProduct();
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  useEffect(() => {
    console.log(size);
  }, [size]);

  return (
    <Container>
      <Nav />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((col) => (
                <FilterColor
                  color={col}
                  key={col}
                  onClick={() => setColor(col)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                value={size}
                defaultValue={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((size) => (
                  <FilterSizeOption key={size} value={size}>
                    {size}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
