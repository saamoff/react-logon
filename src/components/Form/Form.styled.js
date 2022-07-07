import styled from "styled-components";


export const LoginForm = styled.form`
display: flex;
flex-direction: column;

h2{
    font-size: 30px;
    font-weight: 400;
    color: #E0E0E0;
}

p{
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #E9B425;
}

.submitInput{
    color: #FFFFFF;
    font-weight: 700;
    font-size: 18px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    border-radius: 50px; 
    border: 0;
    padding: 20px;
    box-sizing: border-box;
    text-align: center !important;
    cursor: pointer;
}
`

export const UserInput = styled.span`
display: flex;
border: 1px solid ${props => props.error ? '#E9B425' : '#FFFFFF' };
border-radius: 50px;
input{
    color: #E0E0E0;
    padding: 20px;
    border: 0; 
    background: transparent;
    outline: 0;
    width: 100%;
    font-size: 16px;
    text-align: left !important;
}

img{
    height: 20px;
    width: 20px;
}
`