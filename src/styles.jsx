import {styled,createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

margin:0;
padding:0;
box-sizing:border-box;

`


export const Main = styled.main`

   background-color:#6f47be;
   width:100%;
   height:100vh;
   display:flex;
   justify-content:center;
   align-items:center;


   .container{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:15px;

    width:30%;
    background-color:#d7d0d0;
    height:400px;
    border-radius:8px;
   }

   input{
    width:60%;
    height:4vh;
    padding-left:20px;
   }

   p{
    font-size:1.2rem;
   }
`

export const Button = styled.button`
border:none;
width:36%;
height:7vh;
border-radius:4px;
background-color:green;
color:white;
font-size:1.1rem;
cursor: pointer;

&:hover{
    background-color:red;
    transition:1s;
}

`