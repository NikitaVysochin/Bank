import React, { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Exit } from '../../../feature/BankSlice'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Button = styled.button`
  width: 15%;
  height: 5vh;
  background-color: rgb(87, 155, 87);
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
`

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 10vh;
  align-items: center;
`

const MainPageHeader: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const add: string = 'Добавить карту'
  const main: string = 'На главную'
  const pay: string = 'Платежи'

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
