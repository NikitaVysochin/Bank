import React, { useEffect, useState } from 'react'
import MainPageHeader from './MainPageHeader/MainPageHeader'
import CreateCard from '../MainPage/CreateCard/CreateCard'
import axios from 'axios'

function MainPage() {
  const [card, setCard] = useState([])

  useEffect(() => {
    
  }, [])

  return (
    <div>
      <MainPageHeader />
      <CreateCard />
    </div>
  )
}

export default MainPage