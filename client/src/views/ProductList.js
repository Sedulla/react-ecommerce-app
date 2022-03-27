import styled from 'styled-components';

import { Announcement } from '../components/Announcement';
import { Nav } from '../components/Nav';
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { mobile } from '../utils/responsive';

const Container = styled.div``;

const Title = styled.h1`
  margin: 23px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 23px;
  ${mobile({ width: '0px 19px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 21px;
  font-weight: 500;
  margin-right: 19px;
  ${mobile({ fontSize: '17px', marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 11px;
  margin-right: 19px;
  ${mobile({ margin: '11px 0px' })}
`;

const Option = styled.option``;

export const ProductList = () => {
  return (
    <>
      <Container>
        <Nav />
        <Announcement />
        <Title>Clothes</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter the Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Blue</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>Small</Option>
              <Option>Medium</Option>
              <Option>Large</Option>
              <Option>Extra Large</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort The Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Products />
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};
