import React from 'react'
import { LoginSection, LoginContainerL, LoginContainerR, LoginGreetings } from './Login.styled'
import whiteLogo from '../../assets/compassuol-logo-white.png'
import Form from '../../components/Form'

const Login = () => {
  return (
    <LoginSection>
        <LoginContainerL>
            <img className="logoMobile" src={whiteLogo} alt="Compassuol"/>
            <LoginGreetings>
                <h1>Olá,</h1>
                <p>Para continuar navegando de forma <br/> segura, efetue o login na rede.</p>
            </LoginGreetings>
            <Form/>
        </LoginContainerL>
        <LoginContainerR>
            <img src={whiteLogo} alt="compass"/>
        </LoginContainerR>
    </LoginSection>
  )
}

export default Login