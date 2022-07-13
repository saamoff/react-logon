import styled from "styled-components";
import photo from '../../assets/image.png'

export const LoginSection = styled.section`
display: flex;
`

export const LoginContainerL = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
height: 110vh;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

form{
    width: 40%;
    margin-bottom: 10%;
}

.logoMobile{
    visibility: hidden;
}

@media(max-width: 1280px){
    width: 100%;

    .logoMobile{
        visibility: visible;
        margin-right: 16%;
        margin-bottom: 5%;
    }
}

@media(max-width: 414px){
    form{
        width: 90%;
        margin-bottom: 45%;
    }

    .logoMobile{
        margin-right: 9%;
    }
}
`

export const LoginContainerR = styled.div`
display: flex;
justify-content: center;
width: 50%;
height: 110vh;
background-image: url('${photo}');
background-size: cover;

img{
    margin-top: 2%;
    width: 349px;
    height: 94px;
}

@media(max-width: 1280px){
    display: none;
}
`
export const LoginGreetings = styled.span`
color: #E0E0E0;
font-size: 3.75rem;
width: 40%;
margin-bottom: 10%;

h1{
    font-weight: 400;
}

p{
    font-size: 1rem;
}

@media(max-width: 414px){
    width: 90%;
}
`