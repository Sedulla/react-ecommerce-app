import styled from 'styled-components';
import { CategoryItem } from './CategoryItem';
import { mobile } from '../utils/responsive';
import { categories } from '../utils/data';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 23px;
  ${mobile({ padding: '0', flexDirection: 'column' })}
`;

export const Categories = () => {
  return (
    <Container>
      {categories &&
        categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
    </Container>
  );
};
