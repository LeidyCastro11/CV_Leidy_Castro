import React from 'react' //Importar siempre react
import '../utils/CSS/Experiencia.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import Whatsapp from '../utils/images/WhatsApp.jpg'
import Gmail from '../utils/images/Gmail.jpg'
import Github from '../utils/images/github.png'
import {Link} from 'react-router-dom'

const Experiencia = () => {
    return (

        <div className="container_Experiencia">
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
                <h2 className="Subtitulo"> Experiencia </h2>
                <p> He creado algunos proyectos durante mi formacion como desarrolladora fron end y ahora uso GitHub para mostrar mis proyectos y dar a conocer de una mejor manera mi experiencia en la programacion. </p>
            </div>


        </div>
     )
}

export default Experiencia;