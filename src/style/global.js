import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}


button{
    cursor: pointer;
    border: 0;
}


ul, ol, li{
    list-style:none;
}


:root{
    --Color-primary: #27AE60;
    --Color-primary-50: #93D7AF;
    --Color-secondary: #EB5757;


    --gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --white: #ffffff;


    --Negative: #E60000;
    --Warning: #FFCD07;
    --Sucess: #168821;
    --Information: #155BCB;


    --Tittle-1: 1.625rem;
    --Tittle-2: 1.375rem;
    --Tittle-3: 1.125rem;
    --Tittle-4: 0.875rem;


    --Text-1: 1.625rem;
    --Text-2: 0.875rem;
    --Text-3: 0.75rem;

    
}

`


