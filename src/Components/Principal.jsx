import React from 'react' //Importar siempre react
import '../utils/CSS/Principal.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import {Link} from 'react-router-dom'


const Principal = () => {
    return (

        <div className="container_Principal"> 
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

                <div className="principal">   
                    <p id="containerBotones1">
                    <Link to="/yo">
                        <button className="botones1" type="button">Mi Perfil</button>
                    </Link>
                    <Link to="/skills">
                        <button className="botones1" type="button">Habilidades</button>
                    </Link>
                    </p>
                    
                    <p id="containerBotones2">
                    <Link to="/estudios">
                        <button className="botones1" type="button">Estudios</button>
                    </Link>

                    <Link to="/experiencia">
                        <button className="botones1" type="button">Experiencia</button>
                    </Link>
                    </p>
                </div>
            

        </div>

    )
}
export default Principal;