import React from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const add = 'Добавить карту'
  const pay = 'Платежи'

  const goToCreate = () => {
    navigate('/createCard')
  }

  return (
    <>
    <Div>
      <Button onClick={goToCreate} >{add}</Button>
      <Button>{pay}</Button>
      <Button>Exit</Button>
    </Div>
    </>
  )
}

export default MainPageHeader
