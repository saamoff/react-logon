import React from 'react'
import { FooterButtons, FooterSpacer, FooterTimer, FooterWrapper } from './FooterContainer.styled'
import { useNavigate } from 'react-router-dom'

const FooterContainer = () => {
    const [timer, setTimer] = React.useState(600)

    const nav = useNavigate()

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer - 1)
            if(timer === 0){
                nav('/')
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])

    function handleLogout(){
        nav('/')
    }

    function handleContinue(){
        setTimer(600)
    }

  return (
    <FooterWrapper>
        <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa.<br/>
        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
        <FooterSpacer>|</FooterSpacer>
        <FooterTimer>
            <p>Application<br/>refresh in</p>
            <span>
                <h2>{timer}</h2>
                <p>seconds</p>
            </span>
        </FooterTimer>
        <FooterButtons>
            <button className='continueDesktop' onClick={handleContinue}>Continuar Navegando</button>
            <button className='logoutDesktop' onClick={handleLogout}>Logout</button>
            <button className='logoutMobile'onClick={handleLogout}>Logout</button>
            <button className='continueMobile' onClick={handleContinue}>Continuar Navegando</button>
        </FooterButtons>
    </FooterWrapper>
  )
}

export default FooterContainer