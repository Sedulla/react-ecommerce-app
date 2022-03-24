import styled from 'styled-components';
import { MdSend as SendIcon } from 'react-icons/md';

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f5fafd;
`;

const Title = styled.h1`
  margin-bottom: 23px;
  font-size: 70px;
`;

const Desc = styled.div`
  margin-bottom: 23px;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
`;

const EmailInput = styled.input`
  flex: 7;
  padding-left: 23px;
  border: none;
`;

const SendButton = styled.button`
  flex: 1;
  background-color: #009000;
  border: none;
  cursor: pointer;
`;

export const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <Form action="">
          <EmailInput type="text" placeholder="Enter your email" />
          <SendButton type="button">
            <SendIcon style={{ fontSize: '23px', color: '#fff' }} />
          </SendButton>
        </Form>
      </Container>
    </>
  );
};
