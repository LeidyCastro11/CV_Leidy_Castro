import React from 'react' //Importar siempre react
import '../utils/CSS/Experiencia.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import Whatsapp from '../utils/images/WhatsApp.jpg'
import Gmail from '../utils/images/Gmail.jpg'
import Github from '../utils/images/github.png'
import Experienciaimg from '../utils/images/Experiencia.jpg'
import {Link} from 'react-router-dom'

const Experiencia = () => { //-----------------COMPONENTE DE MI EXERIENCIA-----------------
    return (

        <div className="container_Experiencia">
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

            <div className="Descrip">
                <div className="ContainerInfo">
                    <div className="DesExperiencia">
                        <h2 className="Subtitulo"> Experiencia </h2>
                        <p> He creado algunos proyectos durante mi formación como desarrolladora Fron-End y ahora uso GitHub para mostrar mis proyectos y dar a conocer de una mejor manera mi experiencia en la programación. </p>
                    </div>
                    <img src={Experienciaimg} alt="experiencia" />                
                </div>
            </div>


        </div>
     )
}

export default Experiencia;