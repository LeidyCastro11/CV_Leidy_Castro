import React from 'react' //Importar siempre react
import '../utils/CSS/Habilidades.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
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
                <p>320 2291394</p>
                <p>dayanacf3@gmail.com</p>
                <p>LeidyCastro11</p>   
            </div>
            
            <div className="Descripcion">
                <h2 className="Subtitulo"> Habilidades </h2>
                <ul className="List1">{/*Etiqueta que muestra una lista ordenada */}

                    <li>*HTML5</li>
                    <li>*Git Hub</li>
                    <li>*Git Bash</li>
                    <li>*Figma</li>
                    <li>*Redaccion</li>
                    <li>*React</li>
                    <li>*CSS3</li>
                    <li>*Creatividad</li>
                    <li>*JavaScript</li>
                   
	            </ul>
            </div>

        


        </div>
     )
}

export default Habilidades;