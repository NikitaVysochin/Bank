import React, { useEffect, useState, FC } from 'react'
import { TransferCards } from '../../../feature/BankSlice'
import { Get } from '../../../Api/Get'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { Sber } from '../../Sber/Sber'
import { StyledPreview } from '../../Sber/Sber'
import { Button, TextField } from '@sberdevices/plasma-ui'

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: auto auto;
`

interface CardContainerProps {
  active: boolean
}

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; 
  border-radius: 7px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 15px;
  border: 1px solid green;
  margin-top: 5px;
  background-color: ${({active})=>active ? 'rgb(86, 104, 87)':'transparent'};
  cursor: pointer;
`

const CardContainerTo = styled(CardContainer)`
background-color: ${({active})=>active ? 'rgb(86, 104, 87)':'transparent'};
  border: 1px solid green;
`


const InputsContainerDiv = styled.div(() => {
  return {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'flex-end',
    'justify-content': 'space-around'
  }
})

const StyledSberDiv = styled(StyledPreview)`
`

const CardNumberDiv = styled.div`
  margin-right: 10px;
`

const InputsFromTo = styled.div`
  margin: 10px 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
`

const TransferButton = styled(Button)`
  margin: 10px 0;
`

interface IpayPal {
  from_card: string,
  to_card: string,
  amount: string,
  type: 'transfer'
}

export interface ICard {
  account: string,
  amount: string,
  cvv: string,
  date_expire: string,
  id: string,
  name: string,
  number: string,
  owner: number
}

const PayCards: FC = () => {
  const dispatch = useAppDispatch()
  const cardsArray: ICard[] = useAppSelector(state=>state.bankSlice.cards)
  const [inputFrom, setInputFrom] = useState<string>('')
  const [inputTo, setInputTo] = useState<string>('')
  const [payPal, setPayPal] = useState<IpayPal>({
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
              Откуда: <TextField defaultValue={inputFrom} type='number' />
            </InputsFromTo> 
            <StyledPreview>
              Выберите номер счета
              {cardsArray.map((elem)=>{
                return <CardContainer key={elem.id} active={payPal.from_card === elem.id} onClick={(e)=>AddFromInp(e, elem.id, elem.number)} >
                  <div>
                    Имя: {elem.name}
                  </div>
                  <CardNumberDiv key={elem.id} >Номер карты: {elem.number}</CardNumberDiv>
                  <div>Den'gi: {elem.amount}$</div>
                </CardContainer>
              })}
            </StyledPreview>
          </div>
          <div>Сумма <input type='number' onChange={(e)=>setPayPal({...payPal, amount:  e.target.value})}/>
          </div>
          <TransferButton onClick={TransferMoney}>Перевести</TransferButton>
        </InputsContainerDiv>
        
          <div>
            <InputsFromTo>
              Куда: введите номер карты 
              <TextField value={inputTo} type='number' onChange={(e)=>setInputTo(e.target.value)}/>
            </InputsFromTo>
            <Sber>Выберите номер счета
            {cardsArray.map(elem=>{
              return <CardContainerTo key={elem.id} active={payPal.to_card === elem.number} onClick={(e)=>AddToInp(e, elem.number)} >
                <CardNumberDiv key={elem.id}  >{elem.number}</CardNumberDiv>
                <div>{elem.amount}$</div>
              </CardContainerTo>
            })}</Sber>
          </div>
        
      </MainContainer>
    </>
  )
}

export default PayCards
