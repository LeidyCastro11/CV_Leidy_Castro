import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` //------------MIS ESTILOS GLOBALES ------------

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

.ContainerImage img:hover {
    width: 158%;
    height: 60%;
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

.Subtitulo {
    font-family: serif;
    font-style: italic;
    margin-left: 15px;
    font-size: 28px;
    margin-top: 20px;
}

@media screen and (min-width: 750px) and (max-width: 900px) {
    .ContainerText {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 30px;
        font-family: sans-serif;
        font-size: 11px;
        margin-top: 30px;
        height: auto;
        margin-left:120px;
    }

    .ContainerText p{
        font-family: serif;
        font-size: 12px;
        margin: 5px;
        text-align: justify;
    }

    .ContainerImage{
        
        display: flex;
        width: 10%;
        height: 50%;
        margin-top: 30px;
        margin-left: 80px;
        justify-content: center;
    }

    .ContainerImage img {
        width: 310%;
        height: 80%;
        border-radius: 20px;
    }

    .ContainerImage img:hover {
        width: 282%;
        height: 70%;
    }
    .Descripcion{
        display: flex;
        border-radius: 15px;
        display: block;
        position: absolute;
        width: 555px;
        height: 195px;
        margin-top: 240px;
        margin-left: 56px;
    }

    .Subtitulo {
        font-family: serif;
        font-style: italic;
        margin-left: 15px;
        font-size: 22px;
        margin-top: 10px;
    }

}



`;

