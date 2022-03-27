import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MdSearch as SearchIcon,
  MdOutlineShoppingCart as OutlineShoppingCartIcon,
} from 'react-icons/md';
import { mobile } from '../utils/responsive';

const Badge = styled.div``;

const Container = styled.div`
  height: 70px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #d3d3d3;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '23px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    color: #009000;
  }
  ${mobile({ fontSize: '11px', marginLeft: '9px' })}
`;

export const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{ color: 'gray', fontSize: 16, cursor: 'pointer' }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link className="link" to="/">
              Logo.
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link className="link" to="/signup">
              SIGN UP
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="link" to="/login">
              LOG IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <OutlineShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};