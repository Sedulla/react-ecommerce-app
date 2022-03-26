import styled from 'styled-components';
import {
  MdFacebook as FacebookIcon,
  MdMailOutline as MailOutlineIcon,
  MdPhone as PhoneIcon,
  MdRoom as RoomIcon,
} from 'react-icons/md';
import {
  FaInstagram as InstagramIcon,
  FaTwitter as TwitterIcon,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { mobile } from '../utils/responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`;

const ListItem = styled.li`
  margin-bottom: 10px;

  &:hover {
    color: #009000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#f5fafd' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Logo.</Logo>
        <Desc>
          They craft affordable, high-quality menswear for your everyday and
          once-in-a-lifetime moments.
        </Desc>
        <SocialContainer>
          <Link to>
            <SocialIcon color="3b5999">
              <FacebookIcon style={{ fontSize: '19px' }} />
            </SocialIcon>
          </Link>
          <Link to>
            <SocialIcon color="e4405f">
              <InstagramIcon />
            </SocialIcon>
          </Link>
          <Link to>
            <SocialIcon color="55acee">
              <TwitterIcon />
            </SocialIcon>
          </Link>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link className="link" to>
              About us
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Careers
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Terms and Conditions
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Privacy Policy
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Blog
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              FAQs
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Sizing Charts
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Order Tracking
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Shipping
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to>
              Contact us
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: '10px' }} />
          contact@ahmad.dev
        </ContactItem>
      </Right>
    </Container>
  );
};
