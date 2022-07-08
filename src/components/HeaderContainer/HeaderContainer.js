import React from 'react'
import { HeaderWrapper } from './HeaderContainer.styled'
import Clock from '../Clock/index'
import blackLogo from '././../../assets/compassuol-logo-black.png'

const HeaderContainer = () => {
  return (
    <HeaderWrapper>
      <img src={blackLogo} alt="Compassuol"/>
      <Clock></Clock>
      <h2>WEATHER COMPO<br/> 25GRAUS</h2>
    </HeaderWrapper>
  )
}

export default HeaderContainer