import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useState } from "react";
// import Home from "../pages/Home";
// import { Alert } from "@mui/material";
import { useForm } from 'react-hook-form';

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25vw;
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
`;

const ALink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data));
    window.location.href = '/product';
    // reset()
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('email', {
                required: true,
                pattern: EMAIL_PATTERN,
              })}
              type="text"
              placeholder="email"
            />
            {errors.email?.type === 'required' && (
              <div>Please fill the email field</div>
            )}
            {errors.email?.type === 'pattern' && (
              <div>Please write proper email</div>
            )}
            <Input
              // {...register("password", { required: true })}
              onChange={(e) => {
                setValue('password', e.target.value);
              }}
              type="password"
              placeholder="password"
            />
            {errors.password?.type === 'required' && (
              <div>Please fill the password field</div>
            )}
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
    </>
  );
};
