import styled from 'styled-components';
import { MdAdd as AddIcon, MdRemove as RemoveIcon } from 'react-icons/md';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { mobile } from '../utils/responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 23px;
  ${mobile({ padding: '11px' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? '#000' : 'transparent'};
  color: ${(props) => props.type === 'filled' && '#fff'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', gap: '15px' })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const ProductImage = styled.img`
  width: 15vw;
  border-radius: 19px;
  ${mobile({ width: '130px' })}
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 23px;
  font-size: 1.9ch;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 25px;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23px;
  ${mobile({ margin: '5px 9px' })}
`;

const ProductAmount = styled.span`
  font-size: 23px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ marginBottom: '9px' })}
`;

const Hr = styled.hr`
  height: 1px;
  margin-block: 11px;
  margin-inline: auto;
  background-color: #eee;
  border: none;
`;

const Summary = styled.div`
  flex: 1;
  height: 50vh;
  padding: 23px;
  border: 0.5px solid #ededed;
  border-radius: 9px;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'cart.total' && '500'};
  font-size: ${(props) => (props.type === 'cart.total' ? '3ch' : '1.7ch')};
`;

const SummaryItemTitle = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 19vw;
  height: 5.3vh;
  margin-inline: 30px;
  padding: 9px;
  font-weight: 500;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #009000;
    transition: 0.3s;
  }
  ${mobile({ width: '70vw' })}
`;

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  // fixes javascript sum operation floating point error
  const sumDecimal = (a, b) => {
    return parseFloat((a + b).toFixed(13));
  };

  return (
    <>
      <Container>
        <Announcement />
        <Nav />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <Link className="link" to="/products/men">
              <TopButton>CONTINUE YOUR SHOPPING</TopButton>
            </Link>
            <TopTexts>
              <TopText>Shopping Bag ({cart.products.length})</TopText>
              <br />
              <TopText>&nbsp; Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.products?.map((product) => {
                return (
                  <>
                    <Product key={nanoid()}>
                      <ProductDetails>
                        <ProductImage src={product.img} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {product.title}
                          </ProductName>
                          <ProductColor color={product.color} /> {/* black*/}
                          <ProductSize>
                            <b>Size:</b> {product.size}
                          </ProductSize>
                        </Details>
                      </ProductDetails>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <AddIcon />
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <RemoveIcon />
                        </ProductAmountContainer>
                        <ProductPrice>${cart.total}</ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </>
                );
              })}
            </Info>
            <Summary>
              <SummaryTitle>YOUR ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemTitle>Subtotal</SummaryItemTitle>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemTitle>Shipping</SummaryItemTitle>
                <SummaryItemPrice>{cart.shippingCost}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="cart.total">
                <SummaryItemTitle>Total</SummaryItemTitle>
                <SummaryItemPrice>
                  {sumDecimal(cart.total, cart.shippingCost)}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};
