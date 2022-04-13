import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  background: rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  width: 23vw;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40vw;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40vw;
  border: none;
  padding: 15px 20px;
  background-color: #009000;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #006600;
    transition: 0.3s;
  }

  /* during the login fetching request */
  &::disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const ALink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 11px;
  margin-bottom: 9px;
`;

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const onSubmit = (data) => {
    const { username, password } = data;

    login(dispatch, { username, password });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('username', {
                required: true,
              })}
              type="text"
              placeholder="Username"
            />
            {errors.username?.type === 'required' && (
              <div>Please fill the username field</div>
            )}
            <Input
              {...register('password', { required: true, minLength: 5 })}
              type="password"
              placeholder="Password"
            />
            {errors.password?.type === 'required' && (
              <div>Please fill the password field</div>
            )}
            {errors.password?.type === 'minLength' && (
              <div>Password must be at least 5 characters</div>
            )}
            <Button type="submit" disabled={isFetching}>
              LOGIN
            </Button>
            {error && <ErrorMessage>Something went wrong...</ErrorMessage>}
            <ALink>DO NOT YOU REMEMBER THE PASSWORD?</ALink>
            <ALink>
              <Link className="link" to="/register">
                REGISTER HERE
              </Link>
            </ALink>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};
