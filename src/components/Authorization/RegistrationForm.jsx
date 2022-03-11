import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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

const RegistrationForm = () => {
  const navigate = useNavigate()

  const Add = async (login, password) => {
    await axios.post('http://localhost/auth/users/', {
      username: login,
      password: password,
    }).then((res) => {
        navigate('/authorization')
      })
  }

  const changeSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
		const password = formData.get("Password")
		const repPass = formData.get("Repeat password")
    const login = formData.get("login")
    
    if (repPass === password) {
      Add(login, password)
    }
  };

  return (<>
      <Form onSubmit={changeSubmit}>
        <DivInForm>
          <Label >Login:</Label>
            <Input 
              id="login" 
              placeholder='Login'
              autoComplete="off"
              required
              name="login"
              minLength="1"
              title="Введите не менее шести символов"
            />
        </DivInForm>
        <DivInForm>
          <Label >Password:</Label>
            <Input
              name="Password"
              
              placeholder='Password'
              autoComplete="off"
              
              required
              minLength="1"
              title="Пароль должен содержать латинские буквы и хотя бы одну цифру"
            />
        </DivInForm>
        <DivInForm>
          <Label >Repeat password:</Label>
            <Input
              name="Repeat password"
              type='password'
              placeholder='Repeat password'
              autoComplete="off"
              required
              minLength="1"
              title="Пароль должен содержать латинские буквы и хотя бы одну цифру"
            />
        </DivInForm>
        <div>
          <button>Зарегистрироваться</button>
        </div>
        <div>
          <Link to='/authorization'>
            <div>Авторизоваться</div>
          </Link>
        </div>
      </Form>
  </>);
};

export default RegistrationForm