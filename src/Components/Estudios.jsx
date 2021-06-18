import React from 'react' //Importar siempre react
import '../utils/CSS/Estudios.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import Whatsapp from '../utils/images/WhatsApp.jpg'
import Gmail from '../utils/images/Gmail.jpg'
import Github from '../utils/images/github.png'
import Estudiosimg from '../utils/images/Estudios.jpg'
import {Link} from 'react-router-dom'

const Estudios = () => { //-----------------COMPONENTE DE ESTUDIOS-----------------
    return (
             //CONTENEDOR PRINCIPAL
        <div className="container_Estudios">
                <div className="ContainerImage">
                    <Link to="/">
                        <img src={Leidy} alt="Hola esta es Leidy" />
                    </Link>
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Leidy Dayana Castro Fajardo</h1>
                <p><a href="https://api.whatsapp.com/send?phone=573202291394&text=Hola!!%20"><img id="Wapp" src={Whatsapp} alt="WhatsApp"  /></a> 320 2291394</p>
                    <p><a href="https://mail.google.com/mail/u/0/#inbox"><img id="Wapp" src={Gmail} alt="Gmail" /></a> dayanacf3@gmail.com</p>
                    <p><a href="https://github.com/LeidyCastro11"><img id="Wapp" src={Github} alt="Github" /></a> LeidyCastro11</p>       
            </div>

            <div className="Descripcion">
                <div className="ContainerInfo">
                    <img src={Estudiosimg} alt="estudios" />
                    <div className="DesEstudios">
                        <h2 className="Subtitulo"> Estudios </h2>
                        <p>Año: 2020</p>
                        <p>Titulo: Bachiller Academico</p>
                        <p>Institucion: I.E.D Aquileo Parra</p>
                    </div>
                </div>
            </div>
        </div>

     )
}

export default Estudios;
