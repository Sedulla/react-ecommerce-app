import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import { LogIn } from './LogIn';

const Alert = styled.div``;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50vw;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: ' 90vw' })}
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
  min-width: 40vw;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40vw;
  border: none;
  padding: 15px 20px;
  background-color: #009000;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #006600;
    transition: 0.3s;
  }
`;

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem('SubmissionEmail', JSON.stringify(email));
      localStorage.setItem('SubmissionPassword', JSON.stringify(password));
      console.log('Saved in Local Storage');

      setLogin(!login);
    }
  }

  return (
    <>
      {login ? (
        <Container>
          <Wrapper>
            <Title>NEW ACCOUNT</Title>
            <Form onSubmit={handleFormSubmit}>
              <Input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <Input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <Agreement>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quos dolores. <b>PRIVACY POLICY</b>
              </Agreement>
              {flag && (
                <Alert severity="danger">Every Field is important!</Alert>
              )}
              <Button type="submit">REGISTER NOW</Button>
            </Form>
          </Wrapper>
        </Container>
      ) : (
        <LogIn />
      )}
    </>
  );
};
