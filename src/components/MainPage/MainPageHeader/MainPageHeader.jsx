import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Exit } from '../../../feature/counter/BankSlice'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Button = styled.button`
  width: 15%;
  height: 5vh;
  background-color: rgb(164, 255, 164);
  border: 1px solid black;
  border-radius: 6px;
`

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 10vh;
  align-items: center;
`

function MainPageHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const add = 'Добавить карту'
  const main = 'На главную'
  const pay = 'Платежи'

  const goToCreate = () => {
    location.pathname === '/MainPage' ? navigate('/createCard') : navigate('/MainPage')
  }

  const goToPay = () => {
    navigate('/payCards')
  }

  const exit = () => {
    navigate('/')
    localStorage.clear()
    dispatch(Exit())
  }

  return (
      <Div>
        <Button onClick={goToCreate} >
          {location.pathname === '/MainPage' ? add : main}
        </Button>
        <Button onClick={goToPay} >{pay}</Button>
        <Button onClick={exit} >Exit</Button>
      </Div>
  )
}

export default MainPageHeader
