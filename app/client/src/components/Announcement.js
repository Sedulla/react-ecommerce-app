import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #009000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Announcement = () => {
  return <Container>FREE SHIPPING ON ORDERS OVER $150</Container>;
};
