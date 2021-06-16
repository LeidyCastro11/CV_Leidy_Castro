import React from 'react' //Importar siempre react
import '../utils/CSS/Estudios.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
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
                <p>320 2291394</p>
                <p>dayanacf3@gmail.com</p>
                <p>LeidyCastro11</p>   
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
