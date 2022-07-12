import React from 'react'
import { HomeContainer } from './Home.styled'
import HeaderContainer from '../../components/HeaderContainer'
import CompassLogo from '../../assets/uol-ball-transparent.png'
import FooterContainer from '../../components/FooterContainer/FooterContainer'


const Home = () => {
  return (
    <>
        <HeaderContainer></HeaderContainer>
        <HomeContainer>
            <img draggable="false" src={CompassLogo} alt='Logo Uol'/>
            <span>
                <h1>Our mission is</h1>
                <p>Nossa missão é</p>
                <h2>to transform the world</h2>
                <p>transformar o mundo</p>
                <h2>building digital experiences</h2>
                <p>construir experiências digitais</p>
                <h2>that enable our client's growth</h2>
                <p>que permitam o crescimento dos nossos clientes</p>
            </span>
        </HomeContainer>
        <FooterContainer/>
    </>
  )
}

export default Home