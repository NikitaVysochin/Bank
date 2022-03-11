import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MainPageHeader from './MainPageHeader/MainPageHeader'
import CreateCard from './CreateCard/FormCreateCard'
import PayCards from './PayCards/PayCards'
import MyCards from './MyCards'


function MainPage() {
  const { status, error } = useSelector(state=>state.bank)
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