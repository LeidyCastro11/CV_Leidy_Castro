import React from 'react' //Importar siempre react
import '../utils/CSS/Habilidades.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import Whatsapp from '../utils/images/WhatsApp.jpg'
import Gmail from '../utils/images/Gmail.jpg'
import Github from '../utils/images/github.png'
import Habilidadesimg from '../utils/images/Habilidades.jpg'
import {Link} from 'react-router-dom'

const Habilidades = () => {
    return (

        <div className="container_Habilidades">
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
            
            <div className="Descrip">
            
                <div className="ContainerInfo">
                    <div className="DesExperiencia">
                        <h2 className="Subtitulo"> Habilidades </h2>

                       <p className="ContainerInfo"> 
                       <ul className="List1">{/*Etiqueta que muestra una lista ordenada */}
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li> 
                        </ul>

                        <ul className="List1">{/*Etiqueta que muestra una lista ordenada */}
                            <li>Git Bash</li>
                            <li>Git Hub</li>
                            <li>React</li>
                        </ul>

                        <ul className="List1">{/*Etiqueta que muestra una lista ordenada */}
                            <li>Git Bash</li>
                            <li>Git Hub</li>
                            <li>React</li>
                        </ul></p>
                    </div>
                    <img src={Habilidadesimg} alt="habilidades" />
                </div>
            </div>

        


        </div>
     )
}

export default Habilidades;