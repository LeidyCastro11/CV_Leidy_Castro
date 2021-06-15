import React from 'react' //Importar siempre react
import '../utils/CSS/Experiencia.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'

const Experiencia = () => {
    return (

        <div className="container_Experiencia">
                <div className="ContainerImage">
                    <img src={Leidy} alt="Hola esta es Leidy" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Leidy Dayana Castro Fajardo</h1>
                <p>320 2291394</p>
                <p>dayanacf3@gmail.com</p>
                <p>LeidyCastro11</p>   
            </div>

            <div className="Descripcion">
                <h2 className="Subtitulo"> Experiencia </h2>
                <p> He creado algunos proyectos durante mi formacion como desarrolladora fron end y ahora uso GitHub para mostrar mis proyectos y dar a conocer de una mejor manera mi experiencia en la programacion. </p>
            </div>


        </div>
     )
}

export default Experiencia;