import styled from "styled-components";


export const FooterWrapper = styled.footer`
position: absolute;
bottom: 0;
display: flex;
color: #FFFFFF;
width: 100%;
height: 10vh;
text-align: right;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
font-size: 0.75rem;

p:nth-child(1){
    margin-top: 1.5%;
    margin-left: 20%;
    margin-right: 1%;
}

@media(max-width: 1280px){
    display: block;
    p{
        display: none;
    }
}
`

export const FooterSpacer = styled.span`
text-align: center;
font-size: 3.5rem;
font-weight: 100;
margin-right: 5%;

@media(max-width: 1280px){
    display: none;
}
`

export const FooterTimer = styled.span`
width: 20%;
display: flex;
margin-top: 1%;
font-size: 0.875rem;

p:nth-child(1){
    text-align: right;
    margin-right: 6%;
}

span{
    text-align: center;
}

h2{
    text-align: center;
    font-size: 3rem;
    line-height: 50px;
}

@media(max-width: 1280px){
    display: none;
}
`

export const FooterButtons = styled.span`
width: 20%;
margin-left: 6%;

button{
    width: 30%;
    height: 10vh;
}

.logoutMobile{
    display: none;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: #FFFFFF;
    background-color: transparent;
    border: 0;
    cursor: pointer;
}

.continueMobile{
    display: none;
    font-size: 0.75rem;
    color: #C13216;
    background-color: #FFFFFF;
    border: 0;
    cursor: pointer;
}

.logoutDesktop{
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: #FFFFFF;
    background-color: transparent;
    border: 0;
    cursor: pointer;
}

.continueDesktop{
    font-size: 0.75rem;
    padding-top: 10%;
    color: #C13216;
    background-color: #FFFFFF;
    border: 0;
    cursor: pointer;
}

@media(max-width: 1280px){
    .logoutDesktop{
        display: none;
    }

    .continueDesktop{
        display: none;
    }

    .logoutMobile{
        display: block;
        width: 20%;
        font-size: 1.5rem;
        padding-bottom: 2%;
    }

    .continueDesktop{
        display: block;
        position: absolute;
        height: 10vh;
        width: 80%;
        right: 0;
        padding-top: 0;
        font-size: 1.5rem;
    }
}

@media(max-width: 414px){
    .logoutMobile{
        width: 50%;
        font-size: 0.75rem;
        padding-bottom: 8%;
    }

    .continueDesktop{
        width: 50%;
        font-size: 0.75rem;
    }
}
`