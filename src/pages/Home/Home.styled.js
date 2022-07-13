import styled from "styled-components";


export const HomeContainer = styled.main`
text-align: right;
margin-top: 2%;
display: flex;
justify-content: space-between;
img{
    width: 824px;
    height: 824px;
}

span{
    width: 40%;
    margin-right: 5%;
    margin-top: 5%;
}

h1{
    font-size: 2rem;
    font-weight: 700;
    color: #C12D18;
}

h2{
    font-size: 2.90rem;
    font-weight: 700;
    color: #C12D18;
}

p{
    font-size: 1.80rem;
}

@media(max-width: 1280px){
    img{
        margin-top: 5%;
    }
}

@media(max-width: 1099px){
    p{
        display: none;
    }

    h1{
        display: none;
    }

    h2{
        display: none;
    }

}

@media(max-width: 414px){
    img{
        width: 5000px;
        height: 500px;
        margin-top: 50%;
    }
}
`