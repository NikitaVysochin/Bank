import React, { useState, FC } from 'react'
import { useLocation } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import AuthorizationForm from './AuthorizationForm'
import styled from 'styled-components'

const Div = styled.div`
background-color: #dbdbdb;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Authorization:FC = () => {
  const location = useLocation()

  return (<Div>
      {location.pathname=='/registration' && <RegistrationForm />}
      {location.pathname=='/authorization' && <AuthorizationForm />}
    </Div>)
}

export default Authorization
