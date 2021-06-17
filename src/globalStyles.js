import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
.CuerpoTitle {
    margin-right: 96px;
}

.ContainerText {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 30px;
    font-family: sans-serif;
    font-size: 17px;
    margin-top: 40px;
}

.ContainerText p{
    font-family: serif;
    font-size: 20px;
    margin: 5px;
    text-align: justify;
}

.ContainerImage{
    display: flex;
    width: 10%;
    height: 70%;
    margin-top: 40px;
    margin-left: 100px;
    justify-content: center;
}

.ContainerImage img {
    width: 155%;
    height: 57%;
    border-radius: 20px;
}

.Descripcion{
    display: flex;
    border-radius: 15px;
    display: block;
    position: absolute;
    width: 950px;
    height: 230px;
    margin-top: 290px;
    margin-left: 90px;
}


`;

