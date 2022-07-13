import styled from "styled-components";


export const ClockWrapper = styled.span`
display: flex;
flex-direction: column;
text-align: center;

h1{
    font-size: 144px;
    font-weight: 700;
    line-height: 144px;
    margin-top: 2%;
}

p{
    font-size: 14px;
}

@media(max-width: 1280px){
    display: none;
}
`