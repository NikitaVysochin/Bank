import React, { useState, FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
let token = localStorage.getItem("jwtToken") || null
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45vh;
    justify-content: space-around;
    border: 1px solid black;
    background-color: white;
    width: 60%;
    border-radius: 8px;
  `

  const DivInForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
  `

  const Label = styled.label`
    margin: 5px;
  `

  const Input = styled.input`
    height: 38px;
    border-radius: 8px;
    border: 1px solid black;
  `

const AuthorizationForm: FC = () => {
  const navigate = useNavigate()

  const Add = async (login:string, password:string) => {
    await axios.post('http://localhost/auth/jwt/create/', {
      username: login,
      password,
    }).then((res) => {
        localStorage.setItem('jwtToken', res.data.access)
        localStorage.setItem('jwtRefresh', res.data.refresh)
        navigate('/MainPage')
        return axios.post('http://localhost/accounts/', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
      })
      }).then((res) => {
      localStorage.setItem('uuid', res.data.id)
    })
  }

  const changeSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
		const password = formData.get("Password") as string
    const login = formData.get("login") as string

    Add(login, password)  
  };
  
  return (
      <Form onSubmit={changeSubmit}>
        <DivInForm>
          <Label >Login:</Label>
            <Input 
              id="login" 
              placeholder='Login'
              autoComplete="off"
              required
              name="login"
              title="Введите не менее шести символов"
            />
        </DivInForm>
        <DivInForm>
          <Label >Password:</Label>
            <Input
              name="Password"
              type='password'
              placeholder='Password'
              autoComplete="off"
              required
              title="Пароль должен содержать латинские буквы и хотя бы одну цифру"
            />
        </DivInForm>
        <div>
          <button>Авторизоваться</button>
        </div>
        <div>
          <Link to='/registration'>
            <div>Зарегистрироваться</div>
          </Link>
        </div>
      </Form>
  );
};

export default AuthorizationForm