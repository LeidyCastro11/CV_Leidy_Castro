import React from 'react' //Importar siempre react
import '../utils/CSS/Principal.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import {Link} from 'react-router-dom'


const Principal = () => {
    return (

        <div className="container_Principal"> 
                    <div className="ContainerImage">
                        <Link to="/">
                        <button type="button"> <img src={Leidy} alt="Hola esta es Leidy" /></button>
                        </Link>
                    </div>
                <div className="ContainerText">
                    <h1 className="CuerpoTitle">Leidy Dayana Castro Fajardo</h1>
                    <p><i class="fa fa-github" aria-hidden="true"></i>320 2291394</p>
                    <p>dayanacf3@gmail.com</p>
                    <p>LeidyCastro11</p>   
                </div>

                <div className="Descripcion">   
                    <p>
                    <Link to="/yo">
                        <button className="botones" type="button">Mi Perfil</button>
                    </Link>
                    <Link to="/skills">
                        <button>Habilidades</button>
                    </Link>
                    </p>
                    
                    <p>
                    <Link to="/estudios">
                        <button>Estudios</button>
                    </Link>

                    <Link to="/experiencia">
                        <button>Experiencia</button>
                    </Link>
                    </p>
                </div>
            

        </div>

    )
}
export default Principal;