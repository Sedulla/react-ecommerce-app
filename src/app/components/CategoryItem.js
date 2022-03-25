import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  flex: 1;
  height: 70vh;
  margin: 3px;
`;

const Image = styled.img`
  height: 50vh;
  object-fit: cover;
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
      <Image src={category.image} />
      <Info>
        <Title>Title</Title>
        <ShopButton>SHOP NOW</ShopButton>
      </Info>
    </Container>
  );
};
