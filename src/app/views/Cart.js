import styled from 'styled-components';
import { MdAdd as AddIcon, MdRemove as RemoveIcon } from 'react-icons/md';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 23px;
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

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const ProductImage = styled.img`
  width: 15vw;
  border-radius: 19px;
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
`;

const ProductAmount = styled.span`
  font-size: 23px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
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
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => (props.type === 'total' ? '3ch' : '1.7ch')};
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
`;

export const Cart = () => {
  return (
    <>
      <Container>
        <Nav />
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE YOUR SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  <ProductImage src="https://i.ibb.co/XsdmR2c/3.png" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Kabul Carduroy Jubba
                    </ProductName>
                    <ProductColor color="#000" /> {/* black*/}
                    <ProductSize>
                      <b>Size:</b> 37
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>$ 59.95</ProductPrice>
                </PriceDetail>
              </Product>

              <Hr />

              <Product>
                <ProductDetails>
                  <ProductImage
                    src="https://i.ibb.co/XsdmR2c/3.png"
                    loading="lazy"
                  />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Tri-Color Sleeve
                    </ProductName>
                    <ProductColor color="#A9AFBB" />
                    <ProductSize>
                      <b>Size:</b> 37
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>$ 39.95</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>

            <Summary>
              <SummaryTitle>YOUR ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemTitle>Subtotal</SummaryItemTitle>
                <SummaryItemPrice>$ 99.9</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemTitle>Shipping</SummaryItemTitle>
                <SummaryItemPrice>$ 25.35</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemTitle>Tax</SummaryItemTitle>
                <SummaryItemPrice>$ 0.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemTitle>Total</SummaryItemTitle>
                <SummaryItemPrice>$ 125.25</SummaryItemPrice>
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
