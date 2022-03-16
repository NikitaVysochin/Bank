import React from 'react'
import { useLocation } from 'react-router-dom'
import MainPageHeader from './MainPageHeader/MainPageHeader'
import CreateCard from './CreateCard/FormCreateCard'
import PayCards from './PayCards/PayCards'
import MyCards from './MyCards'
import { useAppSelector } from '../../hooks/hooks'

function MainPage() {
  const { status, error } = useAppSelector(state=>state.bankSlice)
  const location = useLocation()

  return (
    <div>
      <MainPageHeader />
      {status === 'loading' && <h2>Абаждиии</h2>}
      {error && <h2>произошел трабл {error}</h2>}
      {location.pathname==='/createCard' && <CreateCard />}
      {location.pathname==='/MainPage' && <MyCards />}
      {location.pathname==='/payCards' && <PayCards />}
    </div>
  )
}

export default MainPage