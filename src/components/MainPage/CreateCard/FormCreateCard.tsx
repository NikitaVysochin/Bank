import React, { useState, FC } from 'react'
import { CreateCard } from '../../../feature/counter/BankSlice'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: auto auto;
  height: 80vh;
`

const MainContainer = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 32vh;
  border: 1px solid black;
  background-color: rgb(255, 179, 251);
`

const CardContainer = styled.div`
  margin: auto auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
  background-color: rgb(255, 179, 251);
`

const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 1.4rem;
  
`

const NameInp = styled.input`
  border: 1px solid black;
  width: 50%;
`

interface newCard {
    name: string,
    account: string,
    cvv: number,
    amount: string,
    number: number,   
    date_expire: string
}

const FormCreateCard: FC = () => {
  const dispatch = useDispatch()

  const getRandomIntInclusive = () => {
    const min: number = Math.ceil(1000000000000000);
    const max: number = Math.floor(9999999999999999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const showDate = () => {
    let year = new Date(time).getFullYear()
    let month = new Date(time).getMonth()
    let showDate = `${month}/${year}`
    return showDate
  }

  const cardNumber: number = getRandomIntInclusive()
  const date: Date = new Date()
  let time = date.getTime()+94672800000
  const CardDate: string = showDate()
  const cvv: number = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

  const [newCard, setNewCard] = useState<newCard>({
    name: '',
    account: localStorage.getItem("uuid"),
    cvv,
    amount: '',
    number: cardNumber,
    date_expire: CardDate
  })

  const Create = (e) => {
    e.preventDefault()
    dispatch(CreateCard(newCard))    
  }
  
  return (
    <Form onSubmit={Create} >
      <MainContainer>
        <CardContainer>
          <CardNumberContainer>
            <div>Введите Ваше имя</div> 
            <NameInp onChange={(e)=>setNewCard({...newCard, name: e.target.value})}/>
          </CardNumberContainer>
          <CardNumberContainer>
            <div>чит-код на деньги</div> 
            <NameInp type='number' onChange={(e)=>setNewCard({...newCard, amount: e.target.value})}/>
          </CardNumberContainer>
        </CardContainer>
        <button>Создать карту</button>
      </MainContainer>
    </Form>
  )
}

export default FormCreateCard
