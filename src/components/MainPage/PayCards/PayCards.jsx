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

const CardContainer = styled.div(()=>{
  return{
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  height: 30,
  'margin-bottom': 15,
  'margin-top': 5,
  'background-color': 'rgb(206, 255, 210)',
  cursor: 'pointer',
  }
})

const InputsContainerDiv = styled.div(() => {
  return {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'flex-end',
    'justify-content': 'space-around',
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

  const AddFromInp = (e, id) => {
    setInputFrom(e.target.innerHTML)
    setPayPal({...payPal, from_card: id})
  }

  const AddToInp = (e, id) => {
    setInputTo(e.target.innerHTML)
    setPayPal({...payPal, to_card: e.target.innerHTML})
  }

  const TransferMoney = () => {
    dispatch(TransferCards(payPal))
  }

  useEffect(() => {
    dispatch(Get())
  }, [dispatch])


  return (
    <>
      <MainContainer>
        <div> 
          <InputsFromTo>
            Откуда: <input value={inputFrom} type='number' />
          </InputsFromTo> 
          Выберите номер счета
          {cardsArray.map(elem=>{
            return <CardContainer >
              <CardNumberDiv key={elem.id} onClick={(e)=>AddFromInp(e, elem.id)} >{elem.number}</CardNumberDiv>
              <div>{elem.amount}$</div>
            </CardContainer>
          })}
        </div>
        <InputsContainerDiv >
          <div>
            <InputsFromTo>
              Куда: введите номер карты <input value={inputTo} type='number' onChange={(e)=>setInputTo(e.target.value)}/>
            </InputsFromTo>
            Выберите номер счета
            {cardsArray.map(elem=>{
              return <CardContainer >
                <CardNumberDiv key={elem.id} onClick={(e)=>AddToInp(e, elem.number)} >{elem.number}</CardNumberDiv>
                <div>{elem.amount}$</div>
              </CardContainer>
            })}
          </div>
          <div>Сумма <input type='number' onChange={(e)=>setPayPal({...payPal, amount: e.target.value})}/></div>
          <TransferButton onClick={TransferMoney}>Перевести</TransferButton>
        </InputsContainerDiv>
      </MainContainer>
    </>
  )
}

export default PayCards
