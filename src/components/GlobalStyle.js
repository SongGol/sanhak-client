import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', NanumSquare, sans-serif;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #40368a;
    border-radius: 8px;
    color: white;
    background-color: #40368a;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #638ce6;
        border: 3px solid #638ce6;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#40368a;
    }
    p{
        padding: 3rem 0rem;
        color: #333;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
