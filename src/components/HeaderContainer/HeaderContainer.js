import React from 'react'
import { HeaderWrapper } from './HeaderContainer.styled'
import Clock from '../Clock/index'
import blackLogo from '././../../assets/compassuol-logo-black.png'
import Weather from '../Weather'

const HeaderContainer = () => {
  return (
    <HeaderWrapper>
      <img src={blackLogo} alt="Compassuol"/>
      <Clock/>
      <Weather/>
    </HeaderWrapper>
  )
}

export default HeaderContainer