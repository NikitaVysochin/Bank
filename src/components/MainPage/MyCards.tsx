import React, { useEffect, FC } from 'react'
import { Get } from '../../Api/Get'
import { DeleteCards } from '../../Api/DeleteCards'
import TestCard from './TestCard/TestCard'
import styled from 'styled-components'
import { ICard } from './PayCards/PayCards'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
 
const Form = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: auto auto;
`

const MainContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 90%;
  margin: auto auto;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
`

const RightContainer = styled.div`
  margin: auto auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 200px;
`

const AmountDiv = styled.div`
  font-size: 19px;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
`

const DeleteButton = styled.div(()=>{
  return{
    'background-color': 'rgb(255, 50, 135)',
    width: 200,
    height: 40,
    'line-height': 40,
    'border-radius': '7px',
    cursor: 'pointer',
    'text-align': 'center',
    '&:hover:': {
      'background-color': 'rgb(255, 30, 30)'
    }
  }
})

const MyCards: FC = () => {
  const cardsArray:ICard[] = useAppSelector(state => state.bankSlice.cards)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(Get())
  }, [dispatch])
  
  return (<> 
    <Form >
    { cardsArray.map((item, index) => {
      const date = new Date(item.date_expire)
      const dateCard = `${date.getMonth()+1}/${date.getFullYear()}`
      return   <MainContainer key={item.id}>
          <TestCard item={item} dateCard={dateCard} />
          <RightContainer>
            <DeleteButton onClick={()=>dispatch(DeleteCards(item.id))}>Удалить карту</DeleteButton>
            <AmountDiv>{item.amount} $</AmountDiv>
          </RightContainer>
        </MainContainer>
    })
    }
    </Form>
    </>)
}

export default MyCards
