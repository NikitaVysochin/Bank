import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { TransferCards } from '../../../feature/counter/BankSlice'
import { Get } from '../../../Api/Get'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: auto auto;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90px; 
  border-radius: 7px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 15px;
  margin-top: 5px;
  background-color: ${({active})=>active ? 'rgb(197, 228, 255)':'rgb(237, 197, 255)'};
  cursor: pointer;
`

const InputsContainerDiv = styled.div(() => {
  return {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'flex-end',
    'justify-content': 'space-around'
  }
})

const CardNumberDiv = styled.div`
  margin-right: 10px;
`

const InputsFromTo = styled.div`
  margin: 10px 0;
`

const TransferButton = styled.button`
  margin: 10px 0;
`

function PayCards() {
  const dispatch = useDispatch()
  const cardsArray = useSelector(state => state.bank.cards)
  const [inputFrom, setInputFrom] = useState('')
  const [inputTo, setInputTo] = useState('')
  const [payPal, setPayPal] = useState({
    from_card: '',
    to_card: inputTo,
    amount: '',
    type: 'transfer'
  })
  

  const AddFromInp = (e, id, number) => {
    setInputFrom(number)
    setPayPal({...payPal, from_card: id})
  }

  const AddToInp = (e, number) => {
  
    setInputTo(number)
    setPayPal({...payPal, to_card: number})
  }

  const TransferMoney = () => {
    dispatch(TransferCards(payPal))
    dispatch(Get())
  }

  useEffect(() => {
    dispatch(Get())
  }, [dispatch])

  return (
    <>
      <MainContainer>
        <InputsContainerDiv >
          <div> 
            <InputsFromTo>
              Откуда: <input value={inputFrom} type='number' />
            </InputsFromTo> 
            Выберите номер счета
            {cardsArray.map(elem=>{
              return <CardContainer active={payPal.from_card === elem.id} onClick={(e)=>AddFromInp(e, elem.id, elem.number)} >
                <div>
                  Имя: {elem.name}
                </div>
                <CardNumberDiv key={elem.id} >Номер карты: {elem.number}</CardNumberDiv>
                <div>Den'gi: {elem.amount}$</div>
              </CardContainer>
            })}
          </div>
          <div>Сумма <input type='number' onChange={(e)=>setPayPal({...payPal, amount:  e.target.value})}/>
          </div>
          <TransferButton onClick={TransferMoney}>Перевести</TransferButton>
        </InputsContainerDiv>
        
          <div>
            <InputsFromTo>
              Куда: введите номер карты <input value={inputTo} type='number' onChange={(e)=>setInputTo(e.target.value)}/>
            </InputsFromTo>
            Выберите номер счета
            {cardsArray.map(elem=>{
              return <CardContainer onClick={(e)=>AddToInp(e, elem.number)} >
                <CardNumberDiv key={elem.id}  >{elem.number}</CardNumberDiv>
                <div>{elem.amount}$</div>
              </CardContainer>
            })}
          </div>
        
      </MainContainer>
    </>
  )
}

export default PayCards
