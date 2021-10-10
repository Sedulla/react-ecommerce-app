import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008080;
  color: #fff;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>NEW ACCOUNT</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quos dolores. <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER NOW</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
