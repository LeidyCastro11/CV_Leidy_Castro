import React from 'react' //Importar siempre react
import '../utils/CSS/Estudios.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import Whatsapp from '../utils/images/WhatsApp.jpg'
import Gmail from '../utils/images/Gmail.jpg'
import Github from '../utils/images/github.png'
import {Link} from 'react-router-dom'

const Estudios = () => {
    return (

        <div className="container_Estudios">
                <div className="ContainerImage">
                    <Link to="/">
                        <img src={Leidy} alt="Hola esta es Leidy" />
                    </Link>
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Leidy Dayana Castro Fajardo</h1>
                    <p><img id="Wapp" src={Whatsapp} alt="WhatsApp" href="https://web.whatsapp.com/" /> 320 2291394</p>
                    <p><img id="Wapp" src={Gmail} alt="Gmail" href="https://mail.google.com/mail/u/0/#inbox" /> dayanacf3@gmail.com</p>
                    <p><img id="Wapp" src={Github} alt="Github" href="https://mail.google.com/mail/u/0/#inbox" /> LeidyCastro11</p>     
            </div>

            <div className="Descripcion">
                <h2 className="Subtitulo"> Estudios </h2>
                <p>Año: 2020</p>
                <p>Titulo: Bachiller Academico</p>
                <p>Institucion: I.E.D Aquileo Parra</p>
            </div>
        </div>

     )
}

export default Estudios;
