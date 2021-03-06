import styled from 'styled-components';

import { Announcement } from '../components/Announcement';
import { Nav } from '../components/Nav';
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { mobile } from '../utils/responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

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
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Container>
        <Announcement />
        <Nav />
        <Title>{cat}'s</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter the Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Almond</Option>
              <Option>Black</Option>
              <Option>Brown</Option>
              <Option>Clay</Option>
              <Option>Iron</Option>
              <Option>Sandstorm</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>Extra Small</Option>
              <Option>Small</Option>
              <Option>Large</Option>
              <Option>Extra Large</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort The Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};
