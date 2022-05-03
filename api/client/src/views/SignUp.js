import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { signUp } from '../redux/apiCalls';
import { mobile } from '../utils/responsive';

const Container = styled.div`
  width: 99vw;
  height: 99vh;
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
  min-width: 39vw;
  margin: 19px 9px 0px 0px;
  padding: 9px;
  border: 1px solid #ddd;
  :focus {
    outline: none;
  }
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 21px 0px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 39px;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();

  function onSubmit(data) {
    const { username, email, password } = data;

    if (!data) {
    } else {
      signUp(dispatch, { username, email, password });
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>NEW ACCOUNT</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Username"
              {...register('username', {
                required: true,
              })}
            />
            {errors.username?.type === 'required' && (
              <div>Please fill the username field</div>
            )}
            <Input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: true,
              })}
            />
            {errors.email?.type === 'required' && (
              <div>Please fill the username field</div>
            )}
            <Input
              type="password"
              placeholder="Password"
              {...register('password', { required: true, minLength: 5 })}
            />
            {errors.password?.type === 'required' && (
              <div>Please fill the password field</div>
            )}
            {errors.password?.type === 'minLength' && (
              <div>Password must be at least 5 characters</div>
            )}
            <Agreement>
              Some text here. <b>PRIVACY AND POLICY</b>
            </Agreement>
            <Button type="submit">Sign Up Now</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};
