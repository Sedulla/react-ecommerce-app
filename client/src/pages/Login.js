import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home';
import { Alert } from '@mui/material';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008080;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ALink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [emaillog, setEmaillog] = useState('');
  const [passwordlog, setPasswordlog] = useState('');

  const [flag, setFlag] = useState('');

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    let pass = localStorage.getItem('SubmissionPassword').replace(/"/g, '');
    let mail = localStorage.getItem('SubmissionEmail').replace(/"/g, '');

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log('EMPTY');
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <>
      {home ? (
        <Container>
          <Wrapper>
            <Title>SIGN IN</Title>

            <Form onSubmit={handleLogin}>
              <Input
                type="email"
                placeholder="email"
                onChange={(e) => setEmaillog(e.target.value)}
              />
              <Input
                type="password"
                placeholder="password"
                onChange={(e) => setPasswordlog(e.target.value)}
              />
              {flag && <Alert severity="warning">Fill correct</Alert>}
              <Button type="submit">LOGIN</Button>
              <ALink>DO NOT YOU REMEMBER THE PASSWORD?</ALink>
              <ALink>
                <Link className="link" to="/register">
                  REGISTER HERE
                </Link>
              </ALink>
            </Form>
          </Wrapper>
        </Container>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Login;
