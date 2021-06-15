import React from 'react' //Importar siempre react
import '../utils/CSS/Principal.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import {Link} from 'react-router-dom'

const Principal = () => {
    return (

        <div className="container_Principal">
                <div className="ContainerImage">
                    <img src={Leidy} alt="Hola esta es Leidy" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Leidy Dayana Castro Fajardo</h1>
                <p>320 2291394</p>
                <p>dayanacf3@gmail.com</p>
                <p>LeidyCastro11</p>   
            </div>

            <Link to="/yo">
                <button>Mi Perfil</button>
            </Link>
            <Link to="/skills">
                <button>Habilidades</button>
            </Link>

        </div>

    )
}
export default Principal;